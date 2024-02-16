import express from 'express';
import { searchSong, getInfoById, getAudioById, getLyricsById } from '../controllers/musicController';

const router = express.Router();

router.get('/search/:id',searchSong)
router.get('/:id', getInfoById)
router.get('/audio/:id',getAudioById)
router.get('/lyrics/:id',getLyricsById)

export default router;
