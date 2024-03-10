const data = [
  {
    "id": 1,
    "name": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "year": 1997
  }
]

export default async function handler(req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
