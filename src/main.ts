import { commonFunc, commonFunc2 } from "./common";
import type { HeyType } from "./types";
import type { IBla } from "./nested/file";
import { common } from "./commonAsNs";

common.commonFunc.toString();

const foo: HeyType = {
  a: "str",
};

const bar: IBla = {
  // Insert `,`eslint(prettier/prettier)
  a: "a",
};

console.log(foo, bar, commonFunc(), commonFunc2());

// @typescript-eslint/no-floating-promises error
Promise.reject("value").catch();

// top level await
await Promise.resolve();
