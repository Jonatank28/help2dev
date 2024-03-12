export const api =
process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api/'
  : 'https://help2dev.com/api/'