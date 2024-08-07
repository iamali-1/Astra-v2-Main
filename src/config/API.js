// const baseUrl = "http://localhost:7000";
const baseUrl = "https://astra-analytica.com";

export const API = `${baseUrl}/_astra`;

export const toImageUrl = (filePath) => {
  return `${baseUrl}/${filePath.replace(/\\/g, "/")}`;
};
