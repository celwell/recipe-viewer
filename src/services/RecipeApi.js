// todo: add these as env vars / config
const baseUrl = "https://api.edamam.com/search?app_id=faf7d25e&app_key= 0bf2536088b142da7ab19a8278d8c374";

const sanitize = (term) => term.trim();

export async function searchRecipes(term) {
  try {
    const response = await fetch(`${baseUrl}&q=${sanitize(term)}`);
    const json = await response.json();
    return json['hits'].map(x => x.recipe);
  } catch (e) {
    console.log("searchRecipes Error: ", e);
    return [];
  }
}
