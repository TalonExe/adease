import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Here you can handle the incoming data, for example, save it to a database
  console.log(data);

  // Send a response back to the Google Apps Script
  return NextResponse.json({ message: "Data received successfully" });
}
