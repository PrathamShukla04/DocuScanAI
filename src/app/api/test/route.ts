import dbConnect from "@/lib/dbConnect";

export async function GET() {
    dbConnect();
    return Response.json({
        success: true,
        message: "Api Working...",
    },
        { status: 200 }
    );
}
