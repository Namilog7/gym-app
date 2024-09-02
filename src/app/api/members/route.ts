import prisma from "../../../../prisma";


export async function GET() {
    const membersPromise = prisma.members.findMany()
    const members = JSON.stringify(membersPromise)
    return new Response(members)
}

export async function POST() {
}