import express from 'express';
import { searchAlbum, getAlbumById } from '../controllers/albumController';

const router = express.Router();

router.get('/search/:id',searchAlbum)
router.get('/get/:id',getAlbumById)

export default router;