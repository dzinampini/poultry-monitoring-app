import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export function getUserFromCookie(cookieHeader) {
  console.log('cookie header', cookieHeader)
  // if (!cookieHeader) return null;
  // const tokenCookie = cookieHeader
  //   .split(';')
  //   .map(c => c.trim())
  //   .find(c => c.startsWith('token='));
  // if (!tokenCookie) return null;


  // console.log('token cokkie', tokenCookie)

  // const token = tokenCookie.split('=')[1];
  const token = cookieHeader

  try {
    const token_details = jwt.verify(token, SECRET_KEY);
    console.log(token_details)
    // TODO: validate expiration of token 
    const user = token_details.user_data
    // console.log(token_details.user_data)
    return user;
  } catch {
    return null;
  }
}
