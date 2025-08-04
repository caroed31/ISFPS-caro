import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Vérifier que l'ID est fourni
    if (!id) {
      return NextResponse.json(
        { error: 'ID du contact requis' },
        { status: 400 }
      );
    }

    // Supprimer le contact de la base de données
    const deletedContact = await prisma.contact.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact supprimé avec succès',
        contact: deletedContact
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de la suppression du contact:', error);

    // Si le contact n'existe pas
    if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
      return NextResponse.json(
        { error: 'Contact non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Vérifier que l'ID est fourni
    if (!id) {
      return NextResponse.json(
        { error: 'ID du contact requis' },
        { status: 400 }
      );
    }

    // Récupérer le contact spécifique
    const contact = await prisma.contact.findUnique({
      where: {
        id: id
      }
    });

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ contact });

  } catch (error) {
    console.error('Erreur lors de la récupération du contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 