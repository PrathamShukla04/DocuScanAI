import { NextResponse } from "next/server";

export async function POST() {
  // Clear the JWT cookie by setting it to empty and expired
  return NextResponse.json(
    { message: "Logged out Successfully" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Secure`,
      },
    }
  );
}
