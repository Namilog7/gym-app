import { NextApiRequest } from "next";
import prisma from "../../../../prisma";
import { Products } from "@prisma/client";

export async function GET() {
    try {
        const productPromise = await prisma.products.findMany()
        const products = JSON.stringify(productPromise)
        return new Response(products)
    } catch (error) {
        return error
    }
}

export async function POST(req: NextApiRequest) {
    const { name, data, image, price }: Products = req.body
    try {
        await prisma.products.create({
            data: {
                name,
                image,
                data,
                price
            }
        })
    } catch (error) {
        return error
    }
}

export async function PUT(req: NextApiRequest) {
    const { name, data, image }: Products = req.body
    try {

    } catch (error) {

    }
}