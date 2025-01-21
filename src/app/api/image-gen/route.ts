import { NextResponse } from "next/server";
import OpenAI, { APIError } from "openai";

export async function POST(request: Request) {
    try{
        const { prompt } = await request.json();
        const openai = new OpenAI();
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt,
          n: 1,
          size: "1024x1024",
          quality:"standard",
        });
      
        const imageUrl = response.data[0].url;
      
        if (!imageUrl) {
          return new NextResponse("No image URL received from DALL-E", { status: 400 });
        }
      
        const imageResponse = await fetch(imageUrl);
        const blob = await imageResponse.blob();
      
        return new NextResponse(blob, {
          headers: {
            "Content-Type": imageResponse.headers.get("Content-Type") || "image/png",
          },
        });
    } catch (error) {
        console.error("Error generating image", error);
        if(error instanceof APIError) {
            return new NextResponse(error.message, { status:error.status });
        }
        return new NextResponse("Error generating image", { status: 500 });
    }
}
