import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const required = ["schoolName", "adminName", "email", "subdomain"];
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
        return NextResponse.json({ error: `${key} is required` }, { status: 400 });
      }
    }

    // simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const existingSchool = await prisma.school.findUnique({ where: { subdomain: body.subdomain } });
    if (existingSchool) {
      return NextResponse.json({ error: "Subdomain already taken" }, { status: 409 });
    }

    const school = await prisma.school.create({
      data: {
        schoolName: body.schoolName,
        adminName: body.adminName,
        email: body.email,
        contactNo: body.contactNo || null,
        address: body.address || null,
        city: body.city || null,
        website: body.website || null,
        description: body.description || null,
        mission: body.mission || null,
        vision: body.vision || null,
        establishedYear: body.establishedYear ? Number(body.establishedYear) : null,
        studentCount: body.studentCount ? Number(body.studentCount) : 0,
        teacherCount: body.teacherCount ? Number(body.teacherCount) : 0,
        subdomain: body.subdomain,
        plan: body.plan || "trial",
      },
    });

    return NextResponse.json({ ok: true, school });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const schools = await prisma.school.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ schools });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ schools: [] });
  }
}
