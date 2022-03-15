const APISTRAPI = 'http://localhost:1337/api/catalogues?populate=*'

async function catalogue () {
    const response = await fetch(`${APISTRAPI}`)
    const data = await response.json();
    console.log(data);
};
