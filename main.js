const url= "https://api.estagio.amfernandes.com.br/imoveis"

function getApi(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
        
        console.log(response.data[0].planta.preco);
    })
    .catch(error => console.error(error))
}


function getBuildings(){
    axios.get(url)
    .then(response => {
        neighborhood.textContent = response.data[0].bairro
        city.textContent = response.data[0].cidade
        price.textContent = response.data[0].planta.preco
    })
    .catch(error => console.error(error))
}

function sortBairros(){
    axios.get(url)
    .then(response => {
        let bairros = []
        response.data.forEach(element => {
            bairros.push(element.bairro);
        });
        console.log(bairros)
    })
    .catch(error => console.error(error))
}

//getApi()
getBuildings()
sortBairros()