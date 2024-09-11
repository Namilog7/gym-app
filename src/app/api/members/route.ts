import { NextApiRequest } from "next";
import prisma from "../../../../prisma";
import { Members } from "@prisma/client";


export async function GET() {
    try {
        const membersPromise = await prisma.members.findMany()
        const members = JSON.stringify(membersPromise)
        return new Response(members)
    } catch (error) {
        return error
    }
}

export async function POST(req: NextApiRequest) {
    const { name, lastname, payment, paymentday, email, problems }: Members = req.body
    try {
        await prisma.members.create({
            data: {
                name,
                lastname,
                email,
                payment,
                paymentday,
                problems
            }
        });
        return new Response(`Se ha creado con exito a ${name}`)
    } catch (error) {
        return error
    }
}

export async function PUT(req: NextApiRequest) {
    const { name, lastname, payment, paymentday, email, problems }: Members = req.body
    try {
        await prisma.members.update({
            where: {
                email
            },
            data: {
                name,
                lastname,
                payment,
                paymentday,
                problems
            }
        });
        return new Response(`Datos de ${name} actualizados`)
    } catch (error) {
        return error
    }
}