const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connectionString = "mongodb+srv://maxq1seg:1234@cluster0.w724m.mongodb.net/results"
        const conn = await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB