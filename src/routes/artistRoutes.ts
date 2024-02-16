import express from 'express';
import { searchArtist, getArtistInfoById, getSongArtistId, getAlbumsArtistId } from '../controllers/artistController';
const router = express.Router();

router.get('/search/:id',searchArtist)
router.get('/:id',getArtistInfoById)
router.get('/songs/:id',getSongArtistId)
router.get('/albums/:id',getAlbumsArtistId)

export default router;