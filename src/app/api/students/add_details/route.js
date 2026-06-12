import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const student = await prisma.student.create({
        data: {
            name: body.name,
            parent: body.parent,
            mother: body.mother,
            village_city: body.village_city,
            
            admissionDate: body.admissionDate,
            
            division: body.division,
            contactNo: body.contectNo,
            email: body.email,
            address: body.address,
            
            // ducument: body.ducument,
        },
    });


    return NextResponse.json(student);
}