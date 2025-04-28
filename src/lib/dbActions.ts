'use server';

import { Stuff, Condition, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  let condition: Condition = 'good';
  if (stuff.condition === 'poor') condition = 'poor';
  else if (stuff.condition === 'excellent') condition = 'excellent';
  else condition = 'fair';

  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  redirect('/list');
}

/**
 * Edits an existing stuff in the database.
 */
export async function editStuff(stuff: Stuff) {
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: stuff,
  });
  redirect('/list');
}

/**
 * Deletes an existing stuff from the database.
 */
export async function deleteStuff(id: number) {
  await prisma.stuff.delete({ where: { id } });
  redirect('/list');
}

/**
 * Creates a new user in the database.
 */
export async function createUser(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.create({ data: { email: credentials.email, password } });
}

/**
 * Changes the password of an existing user in the database.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: { password },
  });
}

/**
 * Adds a new jam session to the database.
 */
export async function addJamSession(jam: Omit<Prisma.JamSessionCreateInput, 'id'>) {
  await prisma.jamSession.create({ data: jam });
  redirect('/jam');
}

/**
 * Returns a list of jam sessions from the database.
 */
export async function listJamSessions() {
  return prisma.jamSession.findMany({ orderBy: { date: 'asc' } });
}
