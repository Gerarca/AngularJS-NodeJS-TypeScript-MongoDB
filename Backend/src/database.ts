import { connect } from "mongoose";

export async function startConnection() { 
    try {
        const db = await connect(`${process.env.DATABASE_URL}`);
        console.log("Connection DataBase Successfully ")
    } catch (error) {
        console.log("error with database connection ", error);
    }   
}