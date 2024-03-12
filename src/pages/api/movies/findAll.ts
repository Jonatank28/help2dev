import movies from '../data/movies.json';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
  