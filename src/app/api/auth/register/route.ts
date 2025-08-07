import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const { email, password, fullName, avatar } = body;

        if (!email || !password || !fullName) {
            return NextResponse.json({ message: "Full name, email and password are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await User.create({
            email,
            password: hashedPassword,
            fullName: fullName || "",
            avatar: avatar || "",
        });

        return NextResponse.json({ user: createdUser, message: "User registered" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Server error", error: (err as Error).message }, { status: 500 });
    }
}
