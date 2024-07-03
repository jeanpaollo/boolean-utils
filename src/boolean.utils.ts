export const not = <T extends boolean = boolean>(object: T) => !object;

export const and = <T extends boolean = boolean>(a: T, b: T) => a && b;

export const nand = <T extends boolean = boolean>(a: T, b: T) => !(a && b);

export const or = <T extends boolean = boolean>(a: T, b: T) => a || b;

export const nor = <T extends boolean = boolean>(a: T, b: T) => !(a || b);

export const xor = <T extends boolean = boolean>(a: T, b: T) =>
  (!a && b) || (a && !b);

export const xnor = <T extends boolean = boolean>(a: T, b: T) =>
  (!a && !b) || (a && b);

export const areAllTrue = <T extends boolean = boolean>(...args: T[]) =>
  args?.every?.((e) => e) ?? false;

export const areAllFalse = <T extends boolean = boolean>(...args: T[]) =>
  args?.every?.((e) => !e) ?? true;

export const isAnyTrue = <T extends boolean = boolean>(...args: T[]) =>
  args?.some?.((e) => e) ?? false;

export const isAnyFalse = <T extends boolean = boolean>(...args: T[]) =>
  args?.some?.((e) => !e) ?? true;
