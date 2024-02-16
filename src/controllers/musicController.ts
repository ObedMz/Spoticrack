import {NextFunction, Request, Response} from 'express'
const ytdl = require('ytdl-core');

const urlSongCache: { [key: string]: { url: string } } = {};

export const searchSong = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const query  = req.params.id;
        const ytmusic = req.ytmusic;
        const songs = await ytmusic.searchSongs(query);
        res.json({ data: songs });

    }catch(err){
        next(err);
    }
}

export const getInfoById = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const songs = await ytmusic.getSong(id);
        res.json({ data: songs });
    }catch(err){
        next(err)
    }
}

async function getExtraInfo(query : String) {
    if (!query || typeof query !== 'string') {
        return null;
    }
    const videoURL = `https://www.youtube.com/watch?v=${query}`;
    try {
        const info = await ytdl.getInfo(videoURL);
        let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        return {url: audioFormats[0].url};
    } catch (error) {
        console.error('Error al obtener el audio del video:', error);
        return null;
    }
}

export const getAudioById = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (urlSongCache[id]) {
            res.json(urlSongCache[id]);
            return;
        }
        const url = await getExtraInfo(id);
        urlSongCache[id] = url;
        res.json(urlSongCache[id]);
    } catch (err) {
        next(err)
    }
}

export const getLyricsById = async(req:Request, res:Response) => {
    // TODO: Implement lyrics fetching from Genius API.
    res.status(501).json({ error: 'Not implemented.' });
}
