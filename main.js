const url = "https://api.estagio.amfernandes.com.br/imoveis";

function getApi() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);

      console.log(response.data);
    })
    .catch((error) => console.error(error));
}

var mainList = [];

function renderBuildings() {
  axios
    .get(url)
    .then((response) => {
      var divBuildings = document.querySelector("#allBuildings");
      divBuildings.innerHTML = "";
      var buildingInfo = document.createElement("p");
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
        var paragraph = document.createElement("li");

        if (currentItem.planta != null) {
          var obj = {
            Nome: currentItem.nome,
            Cidade: currentItem.cidade,
            Bairro: currentItem.bairro,
            Metragem: currentItem.planta.metragem,
            Preço: currentItem.planta.preco,
            Dormitórios: currentItem.planta.dorms,
            Vagas: currentItem.planta.vagas,
          };
        } else {
          var obj = {
            Nome: currentItem.nome,
            Cidade: currentItem.cidade,
            Bairro: currentItem.bairro,
            Metragem: null,
            Preço: null,
            Dormitórios: null,
            Vagas: null,
          };
        }
        mainList.push(obj);
        paragraph.innerHTML = `
                Nome: ${obj.Nome}<br>
                Cidade: ${obj.Cidade}<br>
                Bairro: ${obj.Bairro}<br>
                Metragem: ${obj.Metragem}<br>
                Preço: ${obj.Preço}<br>
                Dormitórios: ${obj.Dormitórios}<br>
                Vagas: ${obj.Vagas}<br>
                <br>`;
        divBuildings.appendChild(buildingInfo);
        buildingInfo.appendChild(paragraph);
      }
      console.log(mainList);
    })
    .catch((error) => console.error(error));
}

function sortDistrict() {
  axios
    .get(url)
    .then((response) => {
      let district = [];
      response.data.forEach((element) => {
        district.push(element.bairro);
      });
      console.log(district);
    })
    .catch((error) => console.error(error));
}

var orderedList = [];
console.log(orderedList);

function sortPriceDesc() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
        if (currentItem.planta != null) {
          var objList = {
            Nome: currentItem.nome,
            Cidade: currentItem.cidade,
            Bairro: currentItem.bairro,
            Metragem: currentItem.planta.metragem,
            Preço: currentItem.planta.preco,
            Dormitórios: currentItem.planta.dorms,
            Vagas: currentItem.planta.vagas,
          };
        } else {
          var objList = {
            Nome: currentItem.nome,
            Cidade: currentItem.cidade,
            Bairro: currentItem.bairro,
            Metragem: null,
            Preço: null,
            Dormitórios: null,
            Vagas: null,
          };
        }
        orderedList.push(objList);
      }
      console.log(orderedList);
      orderedList.sort((a, b) => b.Preço - a.Preço);
      return orderedList;
    })
    .catch((error) => console.error(error));
}

function showOnScreen(element) {
  axios
    .get(url)
    .then((response) => {
      var divScreen = document.querySelector("#show");
      var showInfo = document.createElement("p");
      for (var i = 0; i < response.data.length; i++) {
        var showParagraph = document.createElement("li");
        showParagraph.innerHTML = `
                Nome: ${element[i].Nome}<br>
                Cidade: ${element[i].Cidade}<br>
                Bairro: ${element[i].Bairro}<br>
                Metragem: ${element[i].Metragem}<br>
                Preço: ${element[i].Preço}<br>
                Dormitórios: ${element[i].Dormitórios}<br>
                Vagas: ${element[i].Vagas}<br>
                <br>`;
        divScreen.appendChild(showInfo);
        showInfo.appendChild(showParagraph);
      }
    })
    .catch((error) => console.error(error));
}

// getApi();
// renderBuildings();
// sortDistrict();
sortPriceDesc();
showOnScreen(orderedList);
