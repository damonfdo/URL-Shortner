import express from 'express';
import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import { validateUrl } from '../utils/utils.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });


const router = express.Router();

// Generate Short URL 
router.post('/short', async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;

    const urlId = nanoid();

    if (validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${urlId}`

                url = new Url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (error) {
            res.status(400).json(`Invalid Origin URL Error: ${error}`);
        }
    }
});

export default router;