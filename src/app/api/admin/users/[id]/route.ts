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
        { error: 'ID de l\'utilisateur requis' },
        { status: 400 }
      );
    }

    // Supprimer l'utilisateur de la base de données
    const deletedUser = await prisma.user.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Utilisateur supprimé avec succès',
        user: deletedUser
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);

    // Si l'utilisateur n'existe pas
    if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
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
        { error: 'ID de l\'utilisateur requis' },
        { status: 400 }
      );
    }

    // Récupérer l'utilisateur spécifique
    const user = await prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        firstname: true,
        email: true,
        role: true,
        plan: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });

  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 