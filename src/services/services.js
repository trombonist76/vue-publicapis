// App'in amacı 'publicapis.org' sitesindeki apileri kullanıcının seçtiği kategoriye göre ui'da göstermektir.
// fetchCategories api'dan kategorileri çeker.
// fetchEntriesByCategoryName ise kullanıcının seçtiği kategori ismine göre public apileri çeker.


import axios from "axios";

//https://api.publicapis.org
const baseUrl = import.meta.env.VITE_APP_BASE_API;

export async function fetchCategories() {
  const url = `${baseUrl}/categories`;
  const data = await axios.get(url).then((result) => result.data);
  return data;
}

export async function fetchEntriesByCategoryName(categoryName) {
  const url = `${baseUrl}/entries?category=${categoryName}`;
  const data = await axios.get(url).then((result) => result.data);
  return data;
}
