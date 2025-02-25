import dotenv from "dotenv";

dotenv.config();

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';