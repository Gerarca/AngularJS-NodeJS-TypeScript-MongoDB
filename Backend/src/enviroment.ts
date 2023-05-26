import { checkPortNumber } from "./helpers/helpers";

type Enviroments = 'development' | 'production'
type portServer = Number | undefined

export const  NODE_ENV = (nodeEnv: string | undefined) : Enviroments => {
    const enviroments : Enviroments[] = ['development','production'] 

    if( !(enviroments as string[]).includes(nodeEnv ?? '') ){
        throw new Error(
            `Invalid NODE_ENV: "process.env.NODE_ENV". Allow value: "${enviroments.join('.')}" `
        )
    }

    return nodeEnv as Enviroments
}

export const PORT_SERVER = (portServer: string | undefined): portServer => {
    if( portServer === undefined ){
        throw new Error(
            `"process.env.PORT_SERVER" id required`
        )
    }

    if( !checkPortNumber(parseInt(portServer)) ){
        throw new Error(
            `"process.env.PORT_SERVER" id required`
        )
    }

    return parseInt(portServer)
}

export const DATA_BASE = (databaseName: string): string => {
    if( databaseName.trim() !== databaseName ){
        throw new Error(
            `"process.env.DATABASE_NAME" id required`
        )
    }

    return databaseName
}