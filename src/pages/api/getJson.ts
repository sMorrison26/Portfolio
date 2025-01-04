import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

//expects file name ex: req.query.f = "projects.json"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // Only allow GET method
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Make sure the filename is provided
  if (!req.query.f) {
    res.status(400).json({ error: "Path not provided" });
    return;
  }

  //read the file path
  const encodedFilename = req.query.f as string;
  const decodedFilename = Buffer.from(encodedFilename, "base64").toString("utf-8");
  
  //ensure file path is of specific format 
  const test = "/public/assets/text/" + decodedFilename;
  const regex = new RegExp(/^\/public\/assets\/text\/[a-z]+\.json$/);
  if (!regex.test(test)) {
    res.status(400).json({ error: "Invalid path" });
    return;
  }

  //construct the file path
  const filePath = path.join(process.cwd(), test);

  // Read and return the file 
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    res.status(200).json(JSON.parse(jsonData));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error reading json file" });
  }
}
