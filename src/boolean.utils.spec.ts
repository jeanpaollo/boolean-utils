import {
  and,
  areAllFalse,
  areAllTrue,
  isAnyFalse,
  isAnyTrue,
  nand,
  nor,
  not,
  or,
  xnor,
  xor,
} from "./barrel";

const BOOLEAN_MATRIX = [
  [false, false],
  [false, true],
  [true, false],
  [true, true],
];

const PARAMS = [
  { func: and, returns: [false, false, false, true] },
  { func: nand, returns: [true, true, true, false] },
  { func: or, returns: [false, true, true, true] },
  { func: nor, returns: [true, false, false, false] },
  { func: xor, returns: [false, true, true, false] },
  { func: xnor, returns: [true, false, false, true] },
  { func: areAllTrue, returns: [false, false, false, true] },
  { func: areAllFalse, returns: [true, false, false, false] },
  { func: isAnyTrue, returns: [false, true, true, true] },
  { func: isAnyFalse, returns: [true, true, true, false] },
];

describe(`Test of 'not' function`, () => {
  for (let bool of [true, false]) {
    it(`must return '${!bool}' when invoked with '${bool}'`, () =>
      expect(not(bool)).toEqual(!bool));
  }
});

for (let param of PARAMS) {
  describe(`Test of '${param.func.name}' function`, () => {
    for (let x = 0; x < BOOLEAN_MATRIX.length; x++) {
      const [a, b] = BOOLEAN_MATRIX[x];
      const _return = param.returns[x];

      it(`must return '${_return}' when invoked with '${a}' and '${b}'`, () =>
        expect(param.func(a, b)).toEqual(_return));
    }
  });
}
