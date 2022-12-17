"use strict";

async function adviceAPI() {
  const adviceID = document.querySelector(".card__id");
  const advice = document.querySelector(".advice");
  const random = Math.floor(Math.random() * 224);

  try {
    const apiURL = `https://api.adviceslip.com/advice/${random}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    adviceID.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
  } catch (error) {
    advice.textContent = "Sorry, has problem getting the quotes😢";
  }
}

const btn = document
  .querySelector("button")
  .addEventListener("click", adviceAPI);
