
export const sleep = (timeout: number = 200) => new Promise(r => setTimeout(r, timeout))