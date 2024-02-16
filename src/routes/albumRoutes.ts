import express from 'express';
import { searchAlbum, getAlbumById } from '../controllers/albumController';
import {validateQuery, ytmusic} from '../middlewares/middlewares'

const router = express.Router();

router.get('/search/:q', validateQuery,ytmusic,searchAlbum)
router.get('/get/:id', validateQuery,ytmusic,getAlbumById)

export default router;