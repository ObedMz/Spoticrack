import express from 'express';
import {searchPlaylist} from '../controllers/playlistController';
const router = express.Router();

router.get('/search/:id',searchPlaylist)

export default router;