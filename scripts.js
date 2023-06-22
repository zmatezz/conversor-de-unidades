// Selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector(".message");

// Função para converter as unidades
function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;
  const inputValue = parseFloat(inputElement.value);

  if (inputValue === 0 && fromValue === toValue) {
    const message = "Insira um valor e outra unidade de medida";
    messageElement.textContent = message;
    outputElement.value = "";
    return;
  } else if (inputValue === 0) {
    const message = "Insira um valor";
    messageElement.textContent = message;
    outputElement.value = "";
    return;
  } else if (fromValue === toValue) {
    const message = "Selecione outra unidade de medida";
    messageElement.textContent = message;
    outputElement.value = "";
    return;
  }

  // Converter a entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputValue;
      break;

    case "km":
      meters = inputValue * 1000;
      break;

    case "cm":
      meters = inputValue / 100;
      break;

    case "mm":
      meters = inputValue / 1000;
      break;
  }

  // Converter metros para unidade de saída
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;

    case "km":
      result = meters / 1000;
      break;

    case "cm":
      result = meters * 100;
      break;

    case "mm":
      result = meters * 1000;
      break;
  }

  // Exibir resultado no input
  outputElement.value = result;

  // Exibir resultado na mensagem
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${inputValue} ${fromLabel} equivalem a ${result} ${toLabel}`;
  messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);
