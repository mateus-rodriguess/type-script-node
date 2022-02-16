import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import users from "./routes/users"

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }
    private middleware(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }
    private async database() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/tsnode')
            console.log("DB OK")
        } catch (error) {
            console.log(error)
        }
    }
    private routes(): void {
        this.express.use(users)
    }
}

export default new App().express