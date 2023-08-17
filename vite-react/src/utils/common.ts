export function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time);
  })
}

export const isDev = import.meta.env.DEV

export function encodeUrlParams(params) {
  return window.btoa(encodeURIComponent(JSON.stringify(params)))
}

export function decodeUrlParams(str) {
  try {
    return JSON.parse(decodeURIComponent(window.atob(str)))
  } catch (e) {
    console.log(e)
    return {}
  }
}