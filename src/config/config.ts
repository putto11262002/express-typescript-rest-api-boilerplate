import dotenv from 'dotenv'
import path from 'path'
import { IConfig } from '../types/config'

let envFile: string
/**
 * development configuratyion will be used by default
 */
if (process.env.NODE_ENV === 'production') {
  envFile = 'prod.env'
} else if (process.env.NODE_ENV === 'test') {
  envFile = 'test.env'
} else {
  envFile = 'dev.env'
}

dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) })

const getSanitisedConfig = (): IConfig => ({
  PORT: Number(process.env.PORT) || 5666,
  NODE_ENV: process.env.NODE_ENV,
})

const config = getSanitisedConfig()

export default config
