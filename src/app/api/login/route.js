import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export async function POST(request) {
    const { username, password } = await request.json();

    // TODO: Replace with your DB check
    if (username === 'farmer' && password === 'farmer') {
        const user_data = {
            first_name: 'Dzinaishe',
            last_name: 'Mpini',
            username: 'farmer',
            role: 'farmer',
          };

        const token = jwt.sign(
            { user_data }, 
            SECRET_KEY, 
            { expiresIn: '1h' }
        );

        const response = NextResponse.json({ success: true });
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,
            path: '/',
            secure: false,
            sameSite: 'lax',
            maxAge: 3600,     // 1 hour expiry (in seconds)
        });

        // console.log(response)

        return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
