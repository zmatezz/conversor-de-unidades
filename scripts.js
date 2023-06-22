/* Selecionar os elementos */

const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

/* função para converter as unidades */
function convert() {
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  /* Converter a entrada para metros */
  let meters
  switch (fromValue) {
    case "m":
      meters = inputElement.value
      break

    case "km":
      meters = inputElement.value * 1000
      break

    case "cm":
      meters = inputElement.value / 100
      break

    case "mm":
      meters = inputElement.value / 1000;
      break
  }


  console.log(fromValue, toValue)
}

convertButton.addEventListener("click", convert)