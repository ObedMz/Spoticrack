import express from 'express';
import {searchPlaylist} from '../controllers/playlistController';
import {validateQuery, ytmusic} from '../middlewares/middlewares'

const router = express.Router();

router.get('/search/:q', validateQuery,ytmusic,searchPlaylist)

export default router;