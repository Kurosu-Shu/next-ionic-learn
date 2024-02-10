import { query } from "@/app/db";
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const sql = `DELETE FROM products 
                WHERE Id = ?`;

    try {
        const data = await query(sql, [id]);
        return NextResponse.json(data);
    }
    catch (error) {
        return NextResponse.json(error);
    }

}

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const sql = `SELECT * 
    FROM products 
    WHERE Id = ?`;

    try {
        const data = await query(sql, [id]);
        return NextResponse.json(data);
    }
    catch (error) {
        return NextResponse.json(error);
    }
}