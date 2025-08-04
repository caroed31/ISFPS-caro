import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Récupérer les statistiques
    const totalContacts = await prisma.contact.count();
    const demandesInfo = await prisma.contact.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    });

    // Récupérer les contacts récents
    const recentContacts = await prisma.contact.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        prenom: true,
        nom: true,
        email: true,
        telephone: true,
        formation: true,
        message: true,
        createdAt: true
      }
    });

    const stats = {
      totalEtudiants: 0, // À implémenter quand vous aurez un modèle Etudiant
      totalFormations: 5,
      totalContacts,
      demandesInfo,
      maxCapacity: 1000,
    };

    return NextResponse.json({
      success: true,
      data: {
        stats,
        recentContacts
      }
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des données du dashboard:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des données' 
      },
      { status: 500 }
    );
  }
}