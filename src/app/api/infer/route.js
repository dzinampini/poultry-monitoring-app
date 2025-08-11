import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import formidable from 'formidable-serverless'; // npm install formidable-serverless

export const config = {
    api: {
        bodyParser: false, // Important for file uploads
    },
};

export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get('image'); // "file" is the <input name="file" />
    
    // Example: read file as buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
  
    return NextResponse.json({ 
      filename: file.name, 
      size: buffer.length,
      result: {
        status: 'Healthy',
        confidence: 0.95,
      }
    });
  }
  

export async function GET() {
    return new Response('Infer API works!', { status: 200 });
}

