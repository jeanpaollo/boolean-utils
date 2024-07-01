import { BooleanUtils } from "./boolean.utils";

const NONNIL_VALUES = [true, false, {}, [], NaN, 0, 1, Infinity, -Infinity];

describe("Test of BooleanUtils", () => {
  for (let booleanExpression of [
    ...BooleanUtils.NIL_VALUES,
    ...NONNIL_VALUES,
  ]) {
    it(`when invoking 'not' method with ${booleanExpression} must return ${!booleanExpression}`, () =>
      expect(BooleanUtils.not(booleanExpression)).toBe(!booleanExpression));
  }

  for (let nil of BooleanUtils.NIL_VALUES) {
    it(`when invoking 'isNil' method with ${nil}, must return true`, () =>
      expect(BooleanUtils.isNil(nil)).toBeTruthy());

    it(`when invoking 'isNotNil' method with ${nil}, must return false`, () =>
      expect(BooleanUtils.isNotNil(nil)).toBeFalsy());
  }

  for (let nonNil of NONNIL_VALUES) {
    it(`when invoking 'isNotNil' method with ${nonNil}, must return true`, () =>
      expect(BooleanUtils.isNotNil(nonNil)).toBeTruthy());

    it(`when invoking 'isNil' method with ${nonNil}, must return false`, () =>
      expect(BooleanUtils.isNil(nonNil)).toBeFalsy());
  }

  for (let nil of BooleanUtils.NIL_VALUES) {
    it(`when invoking 'negate' method with 'isNil' function and argument '${nil}', must return true`, () =>
      expect(BooleanUtils.negate(BooleanUtils.isNil)(nil)).toBeFalsy());

    it(`when invoking 'negate' method with 'isNotNil' function and argument '${nil}', must return false`, () =>
      expect(BooleanUtils.negate(BooleanUtils.isNotNil)(nil)).toBeTruthy());
  }

  for (let nonNil of NONNIL_VALUES) {
    it(`when invoking 'negate' method with 'isNil' function and argument '${nonNil}', must return true`, () =>
      expect(BooleanUtils.negate(BooleanUtils.isNil)(nonNil)).toBeTruthy());

    it(`when invoking 'negate' method with 'isNotNil' function and argument '${nonNil}', must return false`, () =>
      expect(BooleanUtils.negate(BooleanUtils.isNotNil)(nonNil)).toBeFalsy());
  }
});
