const toString = Object.prototype.toString

export function isBoolean(obj: any): obj is boolean {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]'
}

export function isNumber(obj: any): obj is number {
  return toString.call(obj) === "[object Number]"
}

export function isString(obj: any): obj is string {
  return toString.call(obj) === "[object String]"
}

export function isNaN(obj: any): obj is number {
  return isNumber(obj) && obj !== +obj
}

export function isFunction(obj: any): obj is Function {
  return toString.call(obj) === "[object Function]"
}

export function isArray<T>(obj: any): obj is Array<T> {
  return Array.isArray(obj)
}

export function isObject(obj: any): obj is Object {
  const tp = typeof obj
  return tp === 'function' || tp === 'object' && !!obj
}
