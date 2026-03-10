import dotenv from 'dotenv';
dotenv.config();

export const env =   {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || '',
    GROQ_API_KEY: process.env.GROQ_API_KEY || '',
    PORT : process.env.PORT || 3000,
}