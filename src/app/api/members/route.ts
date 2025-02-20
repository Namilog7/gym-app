import prisma from "../../../../prisma";
import { Members } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

// Método GET
export async function GET(req: NextRequest) {
    try {
        // Obtener todos los miembros
        const members = await prisma.members.findMany();

        // Actualizar el estado de cada miembro
        const updatedMembers = members.map(member => {
            if (!member.paymentday) {
                return member; // Si no tiene una fecha de pago, se deja como está
            }

            const today = new Date();
            const paymentDate = new Date(member.paymentday);
            const oneMonthLater = new Date(paymentDate);
            oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

            // Cambiar el estado a 'VENCIDO' si corresponde
            return {
                ...member,
                payment: today > oneMonthLater && member.payment === 'ABONADO' ? 'VENCIDO' : member.payment,
            };
        });

        console.log(updatedMembers);
        return NextResponse.json(updatedMembers);
    } catch (error) {
        console.error("Error al obtener miembros:", error); // Log para depuración
        return NextResponse.json({ error: "Error al obtener miembros" }, { status: 500 });
    }
}

// Método POST
export async function POST(req: NextRequest) {
    const bodyparse = await req.json();
    const { name, lastname, email, age, payment, paymentday, problems }: Members = bodyparse;

    if (![name, lastname, email, age].every(Boolean)) {
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
        const user = await prisma.members.update({
            where: { email: email ?? "" },
            data: { name, lastname, payment, paymentday, problems, age }
        });

        return NextResponse.json({ message: `Datos de ${user.name} actualizados` });
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




