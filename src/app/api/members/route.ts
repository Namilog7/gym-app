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
    const { name, lastname, email, age, payment, paymentday, problems }: Members = bodyparse;

    if (![name, lastname, age].every(Boolean)) {
        return NextResponse.json({ message: "Complete los campos" });
    }

    try {
        const findUserEmail = await prisma.members.findFirst({ where: { email } });
        if (findUserEmail) return NextResponse.json({ message: "Ya está registrado ese miembro" });

        const user = await prisma.members.create({
            data: { name, lastname, email, payment, paymentday, problems, age }
        });

        return NextResponse.json({ message: `Se ha creado con éxito el miembro ${user.name}` });
    } catch (error) {
        return NextResponse.json({ error: "Error al crear el miembro" }, { status: 500 });
    }
}

// Método PUT
export async function PUT(req: NextRequest) {
    const bodyparse = await req.json();
    const { name, lastname, payment, paymentday, email, problems, age }: Members = bodyparse;

    try {
        if (email) {
            const user = await prisma.members.update({
                where: { email },
                data: { name, lastname, payment, paymentday, problems, age }
            });
        }
        return NextResponse.json({ message: `Datos fueron actualizados` });
    } catch (error) {
        return NextResponse.json({ error: "Error al actualizar el miembro" }, { status: 500 });
    }
}

// Método DELETE
export async function DELETE(req: NextRequest) {
    const bodyparse = await req.json();
    const { email, name }: Members = bodyparse;

    try {
        if (!email) {
            throw new Error("El email es obligatorio para eliminar un miembro.");
        }
        await prisma.members.delete({ where: { email } });
        return NextResponse.json({ message: `Datos de ${name} eliminados` });
    } catch (error) {
        return NextResponse.json({ error: "Error al eliminar el miembro" }, { status: 500 });
    }
}




