const url = "https://api.estagio.amfernandes.com.br/imoveis";

function start() {
  renderButtons();
  listBuildings();
}

var mainList = [];
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
    <b>Tamanho: </b> ${element.Metragem} m&#178</br>
    <b>Preço: </b> R$${element.Preço}</br>
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
    currentList = mainList;
    showOnScreen(mainList);
  });
  return button;
}

function createSAButton() {
  let button = document.createElement("button");
  button.textContent = "Santo André";
  button.addEventListener("click", function () {
    const selectedSAList = mainList.filter((item) => {
      return item.Cidade === "Santo André";
    });
    currentList = selectedSAList;
    showOnScreen(selectedSAList);
  });
  return button;
}

function createSBButton() {
  let button = document.createElement("button");
  button.textContent = "São Bernardo do Campo";
  button.addEventListener("click", function () {
    const selectedSBList = mainList.filter((item) => {
      return item.Cidade === "São Bernardo do Campo";
    });
    currentList = selectedSBList;
    showOnScreen(selectedSBList);
  });
  return button;
}

function createSCButton() {
  let button = document.createElement("button");
  button.textContent = "São Caetano do Sul";
  button.addEventListener("click", function () {
    const selectedSCList = mainList.filter((item) => {
      return item.Cidade === "São Caetano do Sul";
    });
    currentList = selectedSCList;
    showOnScreen(selectedSCList);
  });
  return button;
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

const downArrow = document.querySelector(".down-arrow");
const upArrow = document.querySelector(".up-arrow");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
  downArrow.classList.toggle("hide-arrow");
  upArrow.classList.toggle("show-arrow");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    downArrow.classList.remove("hide-arrow");
    upArrow.classList.remove("show-arrow");
  });
});

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keyup", (list) => {
  const searchString = list.target.value;
  const filteredList = currentList.filter((building) => {
    return (
      building.Nome.toLowerCase().includes(searchString) ||
      building.Bairro.toLowerCase().includes(searchString)
    );
  });
  showOnScreen(filteredList);
});

start();
