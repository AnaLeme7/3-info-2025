import { NextResponse } from"next/server";

export async funtion GET() {
    return NextResponse.json({mensagem: "Olá Mundo!!!"});
}