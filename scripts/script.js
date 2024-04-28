const form = document.getElementById("form");
const description = document.getElementById("description");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let alert = "";

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    alert = "Cuidado! Você está abaixo do peso!";
    description.classList.add("baixopeso");
    description.classList.remove("normal");
    description.classList.remove("sobrepeso");
    description.classList.remove("obesidade");
    description.classList.remove("obesidadegrave");
    description.classList.remove("obesidademuitograve");
  } else if (bmi >= 18.5 && bmi <= 25) {
    alert = "Você está no peso ideal!";
    description.classList.remove("baixopeso");
    description.classList.add("normal");
    description.classList.remove("sobrepeso");
    description.classList.remove("obesidade");
    description.classList.remove("obesidadegrave");
    description.classList.remove("obesidademuitograve");
  } else if (bmi >= 25 && bmi <= 30) {
    alert = "Cuidado! Você está com sobrepeso!";
    description.classList.remove("baixopeso");
    description.classList.remove("normal");
    description.classList.add("sobrepeso");
    description.classList.remove("obesidade");
    description.classList.remove("obesidadegrave");
    description.classList.remove("obesidademuitograve");
  } else if (bmi >= 30 && bmi <= 35) {
    alert = "Cuidado! Você está com obesidade moderada!";
    description.classList.remove("baixopeso");
    description.classList.remove("normal");
    description.classList.remove("sobrepeso");
    description.classList.add("obesidade");
    description.classList.remove("obesidadegrave");
    description.classList.remove("obesidademuitograve");
  } else if (bmi >= 35 && bmi <= 40) {
    alert = "Cuidado! Você está com obesidade severa!";
    description.classList.remove("baixopeso");
    description.classList.remove("normal");
    description.classList.remove("sobrepeso");
    description.classList.remove("obesidade");
    description.classList.add("obesidadegrave");
    description.classList.remove("obesidademuitograve");
  } else {
    alert = "Cuidado! Você está com obesidade morbida!";
    description.classList.remove("baixopeso");
    description.classList.remove("normal");
    description.classList.remove("sobrepeso");
    description.classList.remove("obesidade");
    description.classList.remove("obesidadegrave");
    description.classList.add("obesidademuitograve");
  }

  value.textContent = bmi.replace(".", ",");
  description.textContent = alert;
});
