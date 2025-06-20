import { Logger } from "@infra-blocks/logger-interface";

export class NullLogger implements Logger {
  private constructor() {
    // No fields to initialize
  }

  log(): void {
    // Do nothing on purpose.
  }
  trace(): void {
    // Do nothing on purpose.
  }
  debug(): void {
    // Do nothing on purpose.
  }
  info(): void {
    // Do nothing on purpose.
  }
  warn(): void {
    // Do nothing on purpose.
  }
  error(): void {
    // Do nothing on purpose.
  }
  isTraceEnabled(): boolean {
    return false;
  }
  isDebugEnabled(): boolean {
    return false;
  }
  isInfoEnabled(): boolean {
    return false;
  }
  isWarnEnabled(): boolean {
    return false;
  }
  isErrorEnabled(): boolean {
    return false;
  }

  static create(): NullLogger {
    return new NullLogger();
  }
}
