import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const encodedPath = req.query.path as string;
    // console.log('EncodedPath coming in: '+encodedPath);
    const decodedPath = Buffer.from(encodedPath,'base64').toString('utf-8');
    // console.log('DecodedPath going out: '+decodedPath);
    const filePath = path.join(process.cwd()+'/public', decodedPath);
    // console.log('FilePath: '+filePath);
    
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        res.status(200).json(JSON.parse(jsonData));
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error reading json file'});
    }
}