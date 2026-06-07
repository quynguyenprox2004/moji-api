// https://www.npmjs.com/package/jsonwebtoken
import JWT from 'jsonwebtoken'

/**
 * Func tạo mới một token - Cần 3 tham số đầu vào
 * userInfo: Những thông tin muốn đính kèm vào token
 * secretSignature: Chữ ký bí mật (dạng một chuỗi String ngẫu nhiên) trên dóc thì để tên là privateKey tùy đều được
 * tokenLife: Thời gian sống của token
 */
const generateToken = async (userInfo, secretSignature, tokenLife) => {
  try {
    // Hàm sign của thư viện JWT
    return JWT.sign(userInfo, secretSignature, { algorithm: 'HS256', expiresIn: tokenLife })
  } catch (error) { throw new Error(error) }
}

/**
 * Func kiểm tra một token có hợp lệ hay không
 * Hợp lệ ở đây hiểu đơn giản là cái token được tạo ra có đúng với cái chữ ký bí mật secretSignature trong dự án hay không
 */
const verifyToken = async (token, secretSignature) => {
  try {
    // Hàm verify của thư viện JWT
    return JWT.verify(token, secretSignature)
  } catch (error) { throw new Error(error) }
}

export const JwtProvider = {
  generateToken,
  verifyToken
}