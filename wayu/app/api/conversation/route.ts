import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai"; 


const configuration = new OpenAIApi({
    apiKey: process.env.OPENAI_SECRET_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(
    req: Request
) {
    try {
        
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("INternal error", {status: 500})
        
    }
}