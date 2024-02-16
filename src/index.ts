import express from 'express';
import musicRoutes from './routes/musicRoutes';
import albumRoutes from './routes/albumRoutes';
import artistRoutes from './routes/artistRoutes';
import playlistRoutes from './routes/playlistRoutes';
import {ytmusic, errorHandler, validateQuery } from './middlewares/middlewares';
const app = express();
const PORT = process.env.PORT || 4444;
const cors = require('cors');

app.use(express.json());

app.use(errorHandler);
app.use(ytmusic);
app.use(validateQuery);
app.use(cors());

app.use('/api/music', musicRoutes);
app.use('/api/album', albumRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/playlist', playlistRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
