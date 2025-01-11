import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json();

    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/png",
      },
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return new NextResponse("Error proxying image", { status: 500 });
  }
}
