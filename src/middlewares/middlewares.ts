import { Request, Response, NextFunction } from 'express';
import YTMusic from 'ytmusic-api';


declare module 'express-serve-static-core' {
    interface Request {
        ytmusic: any;
    }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error.' });
};

export const ytmusic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const ytmusic = await new YTMusic().initialize();
        req.ytmusic = ytmusic;
        next();
    } catch (error) {
        console.error('Error initializing YTMusic:', error);
        next(error);
    }
};