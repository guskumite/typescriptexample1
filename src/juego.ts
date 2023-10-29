export function setupJuego(element: HTMLButtonElement) {
  const resulElemento = document.querySelector<HTMLButtonElement>("#resul");

  const juego = (): void => {
    let atacantes: number = 10;
    let defensores: number = 8;

    while (atacantes > 0 && defensores > 0) {
      let attack: number = Math.floor(Math.random() * 6) + 1;
      let defend: number = Math.floor(Math.random() * 6) + 1;

      if (attack > defend) {
        defensores--;
      } else {
        atacantes--;
      }

      if (attack > 0) {
        if (resulElemento) {
          resulElemento.textContent = `Los atacantes han ganado con ${atacantes} tropas restantes`;
        }
      } else {
        if (resulElemento) {
          resulElemento.textContent = `Los defensores han ganado con ${defensores} tropas restantes`;
        }
      }
    }
  };

  element.addEventListener("click", () => juego());
}
