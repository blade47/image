/**
 * Check if passed object is a Promise
 * @param  object - object to check
 * @returns
 */
export default function isPromise(object: any): object is Promise<any> {
  return object != undefined && typeof object.then === 'function';
}
