export namespace BooleanUtils {
  export const NIL_VALUES = Object.freeze([null, undefined]);

  export const not = <T = any>(object: T) => !object;

  export const isNil = <T = any>(object: T) =>
    object === undefined || object === null;

  export const isNotNil = <T = any>(object: T) => negate(isNil)(object);

  export const negate =
    <F extends (...args: T[]) => any, T = any>(func: F) =>
    (...args: Parameters<F>) =>
      !func(...args);
}
