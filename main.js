const url = "https://api.estagio.amfernandes.com.br/imoveis";

var mainList = [];

function listBuildings() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
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
      }
      return mainList;
    })
    .catch((error) => console.error(error));
}

var orderedPrice = [];

function orderPriceMaxToMin() {
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
        orderedPrice.push(objList);
      }
      orderedPrice.sort((a, b) => b.Preço - a.Preço);
      return orderedPrice;
    })
    .catch((error) => console.error(error));

  // orderedPrice = mainList;
  // orderedPrice.sort((a, b) => b.Preço - a.Preço);
  // console.log(orderedPrice);
  // return orderedPrice;
}

var orderedName = [];

function orderNameAtoZ() {
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
        orderedName.push(objList);
      }
      orderedName.sort(function (x, y) {
          let a = x.Nome.toUpperCase();
          b = y.Nome.toUpperCase();
          return a > b ? 1 : a == b ? 0 : -1;
        });
      return orderedName;
    })
    .catch((error) => console.error(error));

  // orderedName = mainList.sort(function (x, y) {
  //   let a = x.Nome.toUpperCase();
  //   b = y.Nome.toUpperCase();
  //   return a > b ? 1 : a == b ? 0 : -1;
  // });
  // console.log(orderedName);
  // return orderedName;
}

var orderedCity = [];

function orderCityAToZ(){
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
        orderedCity.push(objList);
      }
      orderedCity.sort(function (x, y) {
          let a = x.Cidade.toUpperCase();
          b = y.Cidade.toUpperCase();
          return a > b ? 1 : a == b ? 0 : -1;
        });
        console.log(orderedCity);
      return orderedCity;
    })
    .catch((error) => console.error(error));
}

var orderedDistrict = [];

function orderDistrictAToZ(){
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
      orderedDistrict.push(objList);
    }
    orderedDistrict.sort(function (x, y) {
        let a = x.Bairro.toUpperCase();
        b = y.Bairro.toUpperCase();
        return a > b ? 1 : a == b ? 0 : -1;
      });
      console.log(orderedDistrict);
    return orderedDistrict;
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

listBuildings();
orderNameAtoZ();
orderPriceMaxToMin();
orderCityAToZ();
orderDistrictAToZ();
showOnScreen(orderedDistrict);
