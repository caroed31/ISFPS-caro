import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Validation schema
const userSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  company: z.string().optional(),
  plan: z.enum(["starter", "pro", "enterprise"]).default("starter"),
  secret: z.string().optional(),
});

// Define type for user registration input
type UserRegistrationInput = z.infer<typeof userSchema>;

// Define error response type
interface ErrorResponse {
  error: string;
  details?: z.ZodFormattedError<{
    name: string;
    firstname: string;
    email: string;
    password: string;
    plan?: "starter" | "pro" | "enterprise";
    secret?: string;
    company?: string;
  }>;
}

// Define success response type
interface SuccessResponse {
  success: boolean;
  user: {
    id: string;
    email: string;
    name: string;
    firstname: string;
    plan: string;
    secret: string | null;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate user data
    const validation = userSchema.safeParse(body);
    if (!validation.success) {
      const errorResponse: ErrorResponse = {
        error: "Validation failed", 
        details: validation.error.format()
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const userData: UserRegistrationInput = validation.data;
    
    // Check if user with this email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" }, 
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create the user
    const userCreateData = {
      firstname: userData.firstname,
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      plan: userData.plan,
      secret: userData.password,
    };
    
    const newUser = await prisma.user.create({
      data: userCreateData,
    });

    // Return success without sending sensitive data back
    const successResponse: SuccessResponse = {
      success: true, 
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        firstname: newUser.firstname,
        plan: newUser.plan,
        secret: newUser.secret,
      }
    };
    
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating user:', error);
    const errorResponse: ErrorResponse = {
      error: "Failed to create user"
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}