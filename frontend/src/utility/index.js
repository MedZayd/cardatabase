
export const convertCamelCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).replace(/[A-Z]/g, l => ` ${l}`);