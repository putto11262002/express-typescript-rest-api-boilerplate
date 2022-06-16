export {}
declare global {
  // eslint-disable-next-line no-unused-vars
  namespace NodeJS {
    // eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      PORT: string
      NODE_ENV: 'test' | 'development' | 'production'
    }
  }
}
