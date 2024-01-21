import * as dotenv from 'dotenv';

class Config {

// Default Port
    PORT: number

    MONGO_URI:string

    constructor() {

        dotenv.config();
        
        this.PORT = Number(process.env.PORT)

        this.MONGO_URI=process.env.MONGO_URI
    }
}

export const AppConfig = new Config()
