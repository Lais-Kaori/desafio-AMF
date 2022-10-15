const url = "https://api.estagio.amfernandes.com.br/imoveis";

function start(){
  renderButtons();
  listBuildings();
  selectSABuildings();
  selectSBBuildings();
  selectSCBuildings();
  // orderNameAtoZ(mainList);
  // orderNameZToA(mainList);
  // orderPriceMaxToMin(mainList);
  // orderDistrictAToZ(mainList);
  showOnScreen(mainList);
  // dropdownClick();
}

var mainList = [];
var selectedSAList = [];
var selectedSBList = [];
var selectedSCList = [];
var list = [];

function listBuildings(){
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

function selectSABuildings(){
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
        if (currentItem.cidade === "Santo André") {
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
          selectedSAList.push(obj);
        }
      }
      // console.log(selectedSAList);
      return selectedSAList;
    })
    .catch((error) => console.error(error));
}

function selectSBBuildings(){
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
        if (currentItem.cidade === "São Bernardo do Campo") {
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
          selectedSBList.push(obj);
        }
      }
      // console.log(selectedSBList);
      return selectedSBList;
    })
    .catch((error) => console.error(error));
}

function selectSCBuildings(){
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        var currentItem = response.data[i];
        if (currentItem.cidade === "São Caetano do Sul") {
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
          selectedSCList.push(obj);
        }
      }
      // console.log(selectedSCList);
      return selectedSCList;
    })
    .catch((error) => console.error(error));
}

function orderPriceMaxToMin(){
  axios
    .get(url)
    .then(
      (response) => {
        list.sort((a, b) => b.Preço - a.Preço);
        showOnScreen(list);
      })
    .catch((error) => console.error(error));
  }

function orderPriceMinToMax(){
  axios
    .get(url)
    .then(
      (response) => {
        list.sort((a, b) => a.Preço - b.Preço);
        showOnScreen(list);
      })
    .catch((error) => console.error(error));
}

function orderNameAToZ(){
  axios
    .get(url)
    .then((response) => {
      list.sort(function (x, y) {
        let a = x.Nome.toUpperCase();
        b = y.Nome.toUpperCase();
        return a > b ? 1 : a == b ? 0 : -1;
      });
      showOnScreen(list);
    })
    .catch((error) => console.error(error));
}

function orderNameZToA(){
  axios
    .get(url)
    .then((response) => {
      list.sort(function (x, y) {
        let a = x.Nome.toUpperCase();
        b = y.Nome.toUpperCase();
        return a < b ? 1 : a == b ? 0 : -1;
      });
      showOnScreen(list);
    })
    .catch((error) => console.error(error));
  }

function orderDistrictAToZ(){
  axios
    .get(url)
    .then((response) => {
      list.sort(function (x, y) {
        let a = x.Bairro.toUpperCase();
        b = y.Bairro.toUpperCase();
        return a > b ? 1 : a == b ? 0 : -1;
      });
      showOnScreen(list);
    })
    .catch((error) => console.error(error));
}

function orderDistrictZToA(){
  axios
    .get(url)
    .then((response) => {
      list.sort(function (x, y) {
        let a = x.Bairro.toUpperCase();
        b = y.Bairro.toUpperCase();
        return a < b ? 1 : a == b ? 0 : -1;
      });
      showOnScreen(list);
    })
    .catch((error) => console.error(error));
}

function showOnScreen(element){
  axios
    .get(url)
    .then((response) => {
      var divScreen = document.querySelector("#show");
      divScreen.innerHTML = "";
      var showInfo = document.createElement("p");
      showInfo.classList.add("info");
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

function renderButtons(){
  var divButtons = document.querySelector(".buttons");
  divButtons.innerHTML = "";

  var buttonTodos = createTodosButton();
  var buttonSantoAndre = createSAButton();
  var buttonSaoBernardo = createSBButton();
  var buttonSaoCaetano = createSCButton();

  divButtons.appendChild(buttonTodos);
  divButtons.appendChild(buttonSantoAndre);
  divButtons.appendChild(buttonSaoBernardo);
  divButtons.appendChild(buttonSaoCaetano);

}

function createTodosButton(){
  var button = document.createElement("button");
  button.textContent = "Todos";
  button.addEventListener("click", function(){showOnScreen(mainList)});
  button.addEventListener("click", list = mainList);
  console.log(list);
  return button;
}

function createSAButton(){
  var button = document.createElement("button");
  button.textContent = "Santo André";
  button.addEventListener("click", function(){showOnScreen(selectedSAList)});
  button.addEventListener("click", function(){list = selectedSAList});
  console.log(list);
  return button;
}

function createSBButton(){
  var button = document.createElement("button");
  button.textContent = "São Bernardo";
  button.addEventListener("click", function(){showOnScreen(selectedSBList)});
  button.addEventListener("click", function(){list = selectedSBList});
  console.log(list);
  return button;
}

function createSCButton(){
  var button = document.createElement("button");
  button.textContent = "São Caetano";
  button.addEventListener("click", function(){showOnScreen(selectedSCList)});
  button.addEventListener("click", function(){list = selectedSCList});
  console.log(list);
  return button;
}

// function define(element){
//   list = element;
// }

// function sort(element) {
//   orderPriceMaxToMin(element);
//   showOnScreen(element);
// }

function dropdownClick (){
  document.querySelector("#price-max").addEventListener("click", function(){console.log(list)});
}


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
})

optionsList.forEach( o =>{
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

start()
