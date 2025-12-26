import mongoose from 'mongoose'

export const connectDB = async() => {
    try {
        console.log("Connecting to database...")
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(
            "Database connected successfully! ",
            connect.connection.host,
            connect.connection.name
        )
    }catch(error){
        console.log("Error connecting database: ", error)
        process.exit(1)

    }
}