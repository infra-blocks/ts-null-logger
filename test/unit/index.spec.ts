import { Logger } from "@infra-blocks/logger-interface";
import { NullLogger } from "../../src/index.js";
import { expect } from "@infra-blocks/test";

describe("index", function () {
  describe(NullLogger.name, function () {
    describe("create", function () {
      it("should create a NullLogger instance", function () {
        const logger = NullLogger.create();
        expect(logger).to.be.instanceOf(NullLogger);
      });
    });
    describe("log", function () {
      it("should not do anything for any log level", function () {
        const logger: Logger = NullLogger.create();
        for (const level of [
          "trace",
          "debug",
          "info",
          "warn",
          "error",
        ] as const) {
          expect(() => logger.log(level, "wut? %s", "word")).not.to.throw();
        }
      });
    });
    describe("trace", function () {
      it("should not do anything", function () {
        const logger: Logger = NullLogger.create();
        expect(() => logger.trace("wut? %s", "word")).not.to.throw();
      });
    });
    describe("debug", function () {
      it("should not do anything", function () {
        const logger: Logger = NullLogger.create();
        expect(() => logger.debug("wut? %s", "word")).not.to.throw();
      });
    });
    describe("info", function () {
      it("should not do anything", function () {
        const logger: Logger = NullLogger.create();
        expect(() => logger.info("wut? %s", "word")).not.to.throw();
      });
    });
    describe("warn", function () {
      it("should not do anything", function () {
        const logger: Logger = NullLogger.create();
        expect(() => logger.warn("wut? %s", "word")).not.to.throw();
      });
    });
    describe("error", function () {
      it("should not do anything", function () {
        const logger: Logger = NullLogger.create();
        expect(() => logger.error("wut? %s", "word")).not.to.throw();
      });
    });
    describe("isTraceEnabled", function () {
      it("should return false", function () {
        const logger = NullLogger.create();
        expect(logger.isTraceEnabled()).to.be.false;
      });
    });
    describe("isDebugEnabled", function () {
      it("should return false", function () {
        const logger = NullLogger.create();
        expect(logger.isDebugEnabled()).to.be.false;
      });
    });
    describe("isInfoEnabled", function () {
      it("should return false", function () {
        const logger = NullLogger.create();
        expect(logger.isInfoEnabled()).to.be.false;
      });
    });
    describe("isWarnEnabled", function () {
      it("should return false", function () {
        const logger = NullLogger.create();
        expect(logger.isWarnEnabled()).to.be.false;
      });
    });
    describe("isErrorEnabled", function () {
      it("should return false", function () {
        const logger = NullLogger.create();
        expect(logger.isErrorEnabled()).to.be.false;
      });
    });
  });
});
