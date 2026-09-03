import { Service } from '@angular/core';

type logLevel = 'debug' | 'info' | 'warn' | 'error';

@Service()
export class LoggerService {
  private log(level: logLevel, message: string, data?: unknown): void {
    const time = new Date().toISOString();
    console[level](`${time} ${message}`, data);
  }
  debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }
  info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }
  warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }
  error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }
}
