import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`DB connection ${conn.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(`Error DB connection ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
export default connectDB