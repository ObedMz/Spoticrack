import {NextFunction, Request, Response} from 'express'

export const searchAlbum = async(req:Request, res:Response, next: NextFunction) => {
   try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const albums = await ytmusic.searchAlbums(id);
        res.json({ data: albums });
   }catch(err){
        next(err)
   }
}


export const getAlbumById = async(req:Request, res:Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const ytmusic = req.ytmusic;
        const albums = await ytmusic.getAlbum(id);
        res.json({ data: albums });
    }catch(err) {
        next(err)
    }
}