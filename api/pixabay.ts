import axios from "axios";

const API_KEY = "38764014-74efbbdde92239696186fc01b";
console.log("API Key:", API_KEY);

const base_url = `https://pixabay.com/api/?key=${API_KEY}`;

const format_url = (params: Record<string, string | number>) => {
  let uri = base_url + "&per_page=25&safesearch=true&editors_choice=true";

  Object.keys(params).forEach((key) => {
    let value =
      key === "q" ? encodeURIComponent(params[key] as string) : params[key];
    uri += `&${key}=${value}`;
  });

  console.log("Final URL:", uri);
  return uri;
};

export const fetchImages = async (cat: string) => {
  try {
    const res = await axios.get(format_url({ q: cat }));
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error };
  }
};
