import prisma from "../../../../prisma";
import { Members } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

// Método GET
export async function GET(req: NextRequest) {
    try {
        const membersPromise = await prisma.members.findMany();
        const members = membersPromise.map(member => {
            const today = new Date();
            const paymentDate = new Date(member.paymentday);
            const oneMonthLater = new Date(paymentDate);
            oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

            if (today > oneMonthLater && member.payment === 'ABONADO') {
                member.payment = 'VENCIDO';
            }

            return member;
        });

        return NextResponse.json(members);
    } catch (error) {
        return NextResponse.json({ error: "Error al obtener miembros" }, { status: 500 });
    }
}

// Método POST
export async function POST(req: NextRequest) {
    const bodyparse = await req.json();
    console.log(bodyparse); // Verifica si los datos son los esperados
    const { name, lastname, email, age, payment, paymentday, problems, telefono }: Members = bodyparse;

    if (![name, lastname, age, telefono].every(Boolean)) {
        return NextResponse.json({ message: "Complete los campos" });
    }

    try {
        const findUserEmail = await prisma.members.findFirst({ where: { telefono } });
        if (findUserEmail) return NextResponse.json({ message: "Ya está registrado ese miembro" });

        const user = await prisma.members.create({
            data: { name, lastname, email, payment, paymentday, problems, age, telefono }
        });

        return NextResponse.json({ message: `Se ha creado con éxito el miembro ${user.name}` });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error al crear el miembro" }, { status: 500 });
    }
}

// Método PUT
export async function PUT(req: NextRequest) {
    const bodyparse = await req.json();
    const { name, lastname, payment, paymentday, email, problems, age, telefono }: Members = bodyparse;

    try {

        const user = await prisma.members.update({
            where: { telefono },
            data: { name, lastname, payment, paymentday, problems, age, telefono, email }
        });
        return NextResponse.json({ message: `Datos fueron actualizados` });
    } catch (error) {
        return NextResponse.json({ error: "Error al actualizar el miembro" }, { status: 500 });
    }
}

// Método DELETE
export async function DELETE(req: NextRequest) {
    const bodyparse = await req.json();
    const { email, name, telefono }: Members = bodyparse;

    try {
        if (!telefono) {
            throw new Error("El telefono es obligatorio para eliminar un miembro.");
        }
        await prisma.members.delete({ where: { telefono } });
        return NextResponse.json({ message: `Datos de ${name} eliminados` });
    } catch (error) {
        return NextResponse.json({ error: "Error al eliminar el miembro" }, { status: 500 });
    }
}




