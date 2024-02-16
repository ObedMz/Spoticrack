import {NextFunction, Request, Response} from 'express'

export const searchPlaylist = async(req:Request, res:Response, next: NextFunction) => {
   try {
    const id = req.params.id;
    const ytmusic = req.ytmusic;
    const playlist = await ytmusic.searchPlaylists(id);
    res.json({data: playlist});
   }catch(err){
        next(err)
   }
}
