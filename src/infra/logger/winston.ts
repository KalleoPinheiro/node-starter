import { addColors, createLogger, format, Logger, transports } from 'winston'
import { environmentsConfig } from '../../shared/configs/environments'

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red'
  }
}

const isDevelopment = environmentsConfig.nodeEnv === 'development'

const formatter = format.combine(
  format.colorize(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.splat(),
  format.printf(info => {
    const { timestamp, level, message, ...meta } = info

    return `${(timestamp as string) ?? ''} [${level}]: ${message} ${
      JSON.stringify(meta, null, 2) ?? ''
    }`
  })
)

class WinstonLogger {
  private readonly logger: Logger

  constructor() {
    // Change to Graylog
    const prodTransport = new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    })

    const transport = new transports.Console({
      format: formatter
    })

    this.logger = createLogger({
      level: isDevelopment ? 'trace' : 'error',
      levels: customLevels.levels,
      transports: [isDevelopment ? transport : prodTransport]
    })
    addColors(customLevels.colors)
  }

  trace(msg: any, meta?: any): void {
    this.logger.log('trace', msg, meta)
  }

  debug(msg: any, meta?: any): void {
    this.logger.debug(msg, meta)
  }

  info(msg: any, meta?: any): void {
    this.logger.info(msg, meta)
  }

  warn(msg: any, meta?: any): void {
    this.logger.warn(msg, meta)
  }

  error(msg: any, meta?: any): void {
    this.logger.error(msg, meta)
  }

  fatal(msg: any, meta?: any): void {
    this.logger.log('fatal', msg, meta)
  }
}

export const logger = new WinstonLogger()
