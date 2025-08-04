import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, formation, message } = body;

    // Validation des données
    if (!prenom || !nom || !email || !telephone || !formation || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Sauvegarder le contact dans la base de données
    const contact = await prisma.contact.create({
      data: {
        prenom,
        nom,
        email,
        telephone,
        formation,
        message,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.',
        contact 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erreur lors de la sauvegarde du contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 