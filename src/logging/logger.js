export default class Logger {
    env

    constructor() {
        this.env = process.env.NODE_ENV
    }

    log(...params) {
        (this.env === 'development' || this.env === 'local') && console.log(...params)
    }

    info(...params) {
        this.env !== 'test' && console.log(...params)
    }

    error(...params) {
        this.info(...params)
    }
}
