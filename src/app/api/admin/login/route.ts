import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Validation schema for login
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Define type for login credentials
type LoginCredentials = z.infer<typeof loginSchema>;

// Define error response type
interface ErrorResponse {
  success: false;
  message?: string;
  errors?: z.ZodIssue[];
}

// Define success response type
interface SuccessResponse {
  success: true;
  message: string;
  user: {
    id: string;
    name: string;
    firstname: string;
    email: string;
    role: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate input
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      const errorResponse: ErrorResponse = {
        success: false,
        errors: result.error.errors
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }
    
    const { email, password }: LoginCredentials = result.data;
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    // Check if user exists and is an admin
    if (!user || user.role !== 'admin') {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Invalid credentials'
      };
      return NextResponse.json(errorResponse, { status: 401 });
    }
    
    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Invalid credentials'
      };
      return NextResponse.json(errorResponse, { status: 401 });
    }
    
    // Create session data (do not include sensitive information)
    const session = {
      id: user.id,
      name: user.name,
      firstname: user.firstname,
      email: user.email,
      role: user.role,
    };
    
    // Return success with session data
    const successResponse: SuccessResponse = {
      success: true, 
      message: 'Login successful',
      user: session
    };
    
    return NextResponse.json(successResponse, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Admin login error:', error);
    const errorResponse: ErrorResponse = {
      success: false,
      message: 'An error occurred during login'
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}