import { NextResponse } from "next/server";
import prisma from "../Libs/prisma";

export const POST = async request => {
  try{
    const { email, password } = await request.json()
    const user = await prisma.user.create({
      data: {
        email: email ?? '',
        password: password ?? ''
      }
    })
    return NextResponse.json(user, { status: 201 });
  }catch(error){
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
} 