const APISTRAPI = 'http://localhost:1337/api/catalogues/1?populate=*'

async function catalogue (catalogues) {
    const response = await fetch(`${APISTRAPIcatalogues}`)
    const data = await response.json();
    console.log(data);
};
