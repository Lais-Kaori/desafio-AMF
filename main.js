const url = "https://api.estagio.amfernandes.com.br/imoveis";

function start() {
  renderButtons();
  listBuildings();
  selectSABuildings();
  selectSBBuildings();
  selectSCBuildings();
}

var mainList = [];
var selectedSAList = [];
var selectedSBList = [];
var selectedSCList = [];
var currentList = mainList;

function listBuildings() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        let currentItem = response.data[i];
        if (currentItem.planta != null) {
          var obj = {
            Nome: currentItem.nome,
            Cidade: currentItem.cidade,
            Bairro: currentItem.bairro,
            Metragem: currentItem.planta.metragem,
            Preço: currentItem.planta.preco,
            Dormitórios: currentItem.planta.dorms,
            Vagas: currentItem.planta.vagas,
            Imagem: currentItem.fachada,
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
            Imagem: currentItem.fachada,
          };
        }
        mainList.push(obj);
      }
      showOnScreen(mainList);
      return mainList;
    })
    .catch((error) => console.error(error));
}

function selectSABuildings() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        let currentItem = response.data[i];
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
              Imagem: currentItem.fachada,
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
              Imagem: currentItem.fachada,
            };
          }
          selectedSAList.push(obj);
        }
      }
      return selectedSAList;
    })
    .catch((error) => console.error(error));
}

function selectSBBuildings() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        let currentItem = response.data[i];
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
              Imagem: currentItem.fachada,
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
              Imagem: currentItem.fachada,
            };
          }
          selectedSBList.push(obj);
        }
      }
      return selectedSBList;
    })
    .catch((error) => console.error(error));
}

function selectSCBuildings() {
  axios
    .get(url)
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        let currentItem = response.data[i];
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
              Imagem: currentItem.fachada,
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
              Imagem: currentItem.fachada,
            };
          }
          selectedSCList.push(obj);
        }
      }
      return selectedSCList;
    })
    .catch((error) => console.error(error));
}

function orderPriceMaxToMin() {
  currentList.sort((a, b) => b.Preço - a.Preço);
  showOnScreen(currentList);
}

function orderPriceMinToMax() {
  currentList.sort((a, b) => a.Preço - b.Preço);
  showOnScreen(currentList);
}

function orderNameAToZ() {
  currentList.sort(function (x, y) {
    let a = x.Nome.toUpperCase();
    b = y.Nome.toUpperCase();
    return a > b ? 1 : a == b ? 0 : -1;
  });
  showOnScreen(currentList);
}

function orderNameZToA() {
  currentList.sort(function (x, y) {
    let a = x.Nome.toUpperCase();
    b = y.Nome.toUpperCase();
    return a < b ? 1 : a == b ? 0 : -1;
  });
  showOnScreen(currentList);
}

function orderDistrictAToZ() {
  currentList.sort(function (x, y) {
    let a = x.Bairro.toUpperCase();
    b = y.Bairro.toUpperCase();
    return a > b ? 1 : a == b ? 0 : -1;
  });
  showOnScreen(currentList);
}

function orderDistrictZToA() {
  currentList.sort(function (x, y) {
    let a = x.Bairro.toUpperCase();
    b = y.Bairro.toUpperCase();
    return a < b ? 1 : a == b ? 0 : -1;
  });
  showOnScreen(currentList);
}

const divScreen = document.querySelector("#show");

const showOnScreen = (element) => {
  const htmlString = element
    .map((element) => {
      return `
    <li>
    <p class="text"><b>Nome: </b> ${element.Nome}</br>
    <b>Cidade: </b> ${element.Cidade}</br>
    <b>Bairro: </b> ${element.Bairro}</br>
    <b>Metragem: </b> ${element.Metragem}</br>
    <b>Preço: </b> ${element.Preço}</br>
    <b>Dormitórios: </b> ${element.Dormitórios}</br>
    <b>Vagas: </b> ${element.Vagas}</br>
    </p>
    <img class="img" src="${element.Imagem}" alt="Imagem">
    </li>
    </br>`;
    })
    .join("");
  divScreen.innerHTML = htmlString;
};

function renderButtons() {
  let divButtons = document.querySelector(".buttons");
  divButtons.innerHTML = "";

  let buttonTodos = createAllButton();
  let buttonSantoAndre = createSAButton();
  let buttonSaoBernardo = createSBButton();
  let buttonSaoCaetano = createSCButton();

  divButtons.appendChild(buttonTodos);
  divButtons.appendChild(buttonSantoAndre);
  divButtons.appendChild(buttonSaoBernardo);
  divButtons.appendChild(buttonSaoCaetano);
}

function createAllButton() {
  let button = document.createElement("button");
  button.textContent = "Todos";
  button.addEventListener("click", function () {
    showOnScreen(mainList);
  });
  button.addEventListener("click", function () {
    currentList = mainList;
  });
  return button;
}

function createSAButton() {
  let button = document.createElement("button");
  button.textContent = "Santo André";
  button.addEventListener("click", function () {
    showOnScreen(selectedSAList);
  });
  button.addEventListener("click", function () {
    currentList = selectedSAList;
  });
  return button;
}

function createSBButton() {
  let button = document.createElement("button");
  button.textContent = "São Bernardo";
  button.addEventListener("click", function () {
    showOnScreen(selectedSBList);
  });
  button.addEventListener("click", function () {
    currentList = selectedSBList;
  });
  return button;
}

function createSCButton() {
  let button = document.createElement("button");
  button.textContent = "São Caetano";
  button.addEventListener("click", function () {
    showOnScreen(selectedSCList);
  });
  button.addEventListener("click", function () {
    currentList = selectedSCList;
  });
  return button;
}

function dropdownClick() {
  document.querySelector("#price-max").addEventListener("click", function () {
  });
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

const downArrow = document.querySelector(".downArrow");
const upArrow = document.querySelector(".upArrow");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  downArrow.classList.toggle("hideArrow");
  upArrow.classList.toggle("showArrow");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    downArrow.classList.remove("hideArrow");
    upArrow.classList.remove("showArrow");
  });
});

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  const filteredList = currentList.filter((building) => {
    return (
      building.Nome.toLowerCase().includes(searchString) ||
      building.Bairro.toLowerCase().includes(searchString)
    );
  });
  showOnScreen(filteredList);
});

start();
