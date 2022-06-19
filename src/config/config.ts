import dotenv from 'dotenv'
import { IConfig } from '../types/config'

dotenv.config()

const getSanitisedConfig = (): IConfig => ({
  PORT: Number(process.env.PORT) || 5666,
  NODE_ENV: process.env.NODE_ENV || 'development',
})

const config = getSanitisedConfig()

export default config
