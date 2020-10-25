export default function makeLogger({ winston }) {
  const enumerateErrorFormat = winston.format(info => {
    if (info instanceof Error) {
      Object.assign(info, { message: info.stack })
    }
    return info
  })

  const isDevelopment = (yes, no) => (process.env.NODE_ENV === `production` ? yes : no)

  return winston.createLogger({
    level: `info`,
    format: winston.format.combine(
      enumerateErrorFormat(),
      isDevelopment(winston.format.uncolorize(), winston.format.colorize()),
      winston.format.splat(),
      winston.format.printf(({ level, message }) => `${level}: ${message}`),
    ),
    transports: [
      new winston.transports.File({ filename: `error.log`, level: `error` }),
      new winston.transports.File({ filename: `combined.log` }),
      new winston.transports.Console({ stderrLevels: [`error`] }),
    ],
  })
}
