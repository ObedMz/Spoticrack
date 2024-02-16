import express from 'express';
import { searchSong, getInfoById, getAudioById, getLyricsById } from '../controllers/musicController';
import {validateQuery,ytmusic} from '../middlewares/middlewares'

const router = express.Router();

router.get('/search/:q',validateQuery,ytmusic,searchSong)
router.get('/:id',validateQuery,ytmusic, getInfoById)
router.get('/audio/:id', validateQuery,ytmusic,getAudioById)
router.get('/lyrics/:id', validateQuery,ytmusic,getLyricsById)

export default router;
