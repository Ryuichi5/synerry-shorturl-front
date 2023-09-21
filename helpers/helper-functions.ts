// helpers/helper-functions.ts
export const generateRandomString = (): string => {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueID = '';
    for (let i = 0; i < 6; i++) {
      uniqueID += string.charAt(Math.floor(Math.random() * string.length));
    }
    return uniqueID;
  };
  
  export const isValidHttpUrl = (string: string): boolean => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  };
  
  
  
  module.exports = {
    generateRandomString,
    isValidHttpUrl
  }