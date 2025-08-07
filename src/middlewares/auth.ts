import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export interface AuthPayload {
    userId: string;
    email: string;
    iat?: number;
    exp?: number;
}

export function authenticateToken(req: NextRequest): AuthPayload {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        throw new Error('Not authenticated');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
        return decoded;
    } catch {
        throw new Error('Unauthorized');
    }
}