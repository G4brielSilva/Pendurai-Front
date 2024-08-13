import type { NextApiRequest, NextApiResponse } from "next";

function get(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ body: { message: 'GET request'} });
}

function post(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ body: { message: 'POST request'} });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return get(req, res);
        case 'POST':
            return post(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}