import prisma from "../../../../prisma";
import { Members } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";


export async function handler(req: NextRequest, res: NextResponse) {

    if (req.method == "GET") {
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

            return new Response(JSON.stringify(members));
        } catch (error) {
            return error
        }
    }


    const bodyparse = await req.json()
    if (req.method == "POST") {
        const { name, lastname, email, age, payment, paymentday, problems }: Members = bodyparse
        if (![name, lastname, email, age].every(Boolean)) {
            return NextResponse.json({ message: "Complete los campos" })
        }
        try {
            const findUserEmail = await prisma.members.findFirst({
                where: {
                    email
                }
            })
            if (findUserEmail) return NextResponse.json({ message: "Ya esta registrado ese miembro" })
            const user = await prisma.members.create({
                data: {
                    name,
                    lastname,
                    email,
                    payment,
                    paymentday,
                    problems,
                    age
                }
            });
            const message = { message: `Se ha creado con exito el miembro ${user.name}` }
            return NextResponse.json(message)
        } catch (error) {
            console.log(error)
        }
    }

    if (req.method == "PUT") {
        const { name, lastname, payment, paymentday, email, problems, age }: Members = bodyparse
        try {
            const user = await prisma.members.update({
                where: {
                    email
                },
                data: {
                    name,
                    lastname,
                    payment,
                    paymentday,
                    problems,
                    age
                }
            });
            return NextResponse.json({ message: `Datos de ${user.name} actualizados` })
        } catch (error) {
            return new Response(`Hubo un problema: ${error}`)
        }
    }
    if (req.method == "DELETE") {
        const { email, name }: Members = bodyparse
        try {
            await prisma.members.delete({
                where: {
                    email
                }
            })
            return NextResponse.json({ message: `Datos de ${name} eliminados` })
        } catch (error) {
            return new Response(`Hubo un error: ${error}`)
        }
    }
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }





