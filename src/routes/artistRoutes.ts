import express from 'express';
import { searchArtist, getArtistInfoById, getSongArtistId, getAlbumsArtistId } from '../controllers/artistController';
import {validateQuery , ytmusic} from '../middlewares/middlewares'
const router = express.Router();

router.get('/search/:q', validateQuery,ytmusic, searchArtist)
router.get('/:id', validateQuery,ytmusic,getArtistInfoById)
router.get('/audio/:id', validateQuery,ytmusic,getSongArtistId)
router.get('/lyrics/:id', validateQuery,ytmusic,getAlbumsArtistId)

export default router;