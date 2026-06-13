import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  if (!body.id) {
    return NextResponse.json({ error: "Missing student id" }, { status: 400 });
  }

  const student = await prisma.student.update({
    where: { id: Number(body.id) },
    data: {
      name: body.name,
      parent: body.parent,
      mother: body.mother,
      village_city: body.village_city,
      admissionDate: body.admissionDate,
      division: body.division,
      contactNo: body.contactNo,
      email: body.email,
      address: body.address,
    },
  });

  return NextResponse.json(student);
}
