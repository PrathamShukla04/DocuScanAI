import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {

}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to DataBase");
        return;
    }

    try {
        // console.log(process.env.MONGODB_URI)
        const db = await mongoose.connect(process.env.MONGODB_URI || "")
        connection.isConnected = db.connections[0].readyState
        // console.log(db)
        console.log("DB Connected Successfully")
    } catch {
        // handle error
    }
}

export default dbConnect;