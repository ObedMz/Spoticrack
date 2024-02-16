import {NextFunction, Request, Response} from 'express'

export const searchArtist = async(req:Request, res:Response , next: NextFunction) => {
   try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const artist = await ytmusic.searchArtists(id);
        res.json({data: artist});
   }catch(err){
        next(err)
   }
}

export const getSongArtistId = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const songs = await ytmusic.getArtistSongs(id);
        res.json({data: songs});
    }catch(err) {
        next(err)
    }
 }

 export const getAlbumsArtistId = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id= req.params.id;
        const ytmusic = req.ytmusic;
        const albums = await ytmusic.getArtistAlbums(id);
        res.json({data: albums});

    }catch(err){
        next(err)
    }
 }
 

export const getArtistInfoById = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const info = await ytmusic.getArtist(id);
        res.json({data: info});
    }catch(err) {
        next(err)
    }
}