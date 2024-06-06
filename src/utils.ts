
export const sleep = (timeout: number = 200) => new Promise(r => setTimeout(r, timeout))

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number = 300,
): (...args: Params) => void {
  let timer: any
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}