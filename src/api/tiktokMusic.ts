import express from 'express';
import { Downloader } from '../core/Downloader';
import { Request } from 'some-request-library'; // Replace with the actual library

const router = express.Router();

router.post('/tiktok-music', async (req: Request, res) => {
  try {
    const { username } = req.body;
    const downloader = new Downloader({
      progress: false,
      proxy: '',
      noWaterMark: false,
      headers: {},
      filepath: '',
      bulk: false,
      cookieJar: request.jar()
    });
    const musicLinks = await downloader.getTikTokUserMusicLinks(username);
    res.json({ musicLinks });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching music links' });
  }
});

export default router;