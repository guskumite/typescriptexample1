import "./style.css";
import { setupCounter } from "./counter.ts";
import { setupJuego } from "./juego.ts";
import { setupCuadro } from "./cuadro.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <div>
    <div class="card">
       <button id="resul" type="button"> ¡Juguemos defensa y ataque! </button>
    </div>   
    <h2> Counter: </h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <p> ¿Cuántos carácteres para pintar el cuadro (1-50)? </p>
      <input type="number" id="cuantos" placeholder="¿número de carácteres?" min=1 max=50>
      <button id="dibujar" type="button">¡Dibujar!</button>
      <div id="cuadro" class="shorter">  </div>
    </div>  
   </div>
   `;

const kuantos = document.querySelector<HTMLButtonElement>("#dibujar");

if (kuantos) {
  let quantity = 0;
  kuantos?.addEventListener("click", () => {
    const protokuantos = document?.querySelector<HTMLInputElement>("#cuantos"!);
    if (protokuantos) {
      const prekuantos = protokuantos.value;
      if (prekuantos) {
        quantity = parseInt(prekuantos);
      }
    }
    setupCuadro(quantity);
  });
}

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setupJuego(document.querySelector<HTMLButtonElement>("#resul")!);
