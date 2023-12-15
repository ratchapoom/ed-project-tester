import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        return NextResponse.json({
            success: true
        })
    } catch (error) {
        console.log(error)
    }
} 

export async function POST(req: Request) {
    try {
        return NextResponse.json({
            success: true
        })
    } catch (error) {
        console.log(error)
    }
} 