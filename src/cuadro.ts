export function setupCuadro(cuantos: number) {
  const cuadro = (): void => {
    const cuadroElement = document.querySelector<HTMLElement>("#cuadro");
    //initialize the drawing before drawing
    while (cuadroElement?.firstChild) {
      cuadroElement.removeChild(cuadroElement.firstChild);
    }

    let line1Array = [];
    let line2Array = [];
    let line3Array = [];
    let line4Array = [];

    for (let i = 0; i <= cuantos - 1; i++) {
      line1Array.push("*");
    }

    for (let j = 0; j <= cuantos - 1; j++) {
      if (j === 0 || j === cuantos - 1) {
        line2Array.push("*");
      } else {
        line2Array.push("&nbsp&nbsp");
      }
    }

    let line1 = line1Array.join("");
    let line2 = line2Array.join("");

    for (let i = 0; i <= cuantos - 1; i++) {
      if (i === 0 || i === cuantos - 1) {
        line3Array[i] = line1;
        line4Array[i] = document.createElement("p");
        line4Array[i].innerHTML = line1;
        cuadroElement?.appendChild(line4Array[i]);
      } else {
        line3Array[i] = line2;
        line4Array[i] = document.createElement("p");
        line4Array[i].classList.add("shorter2");
        line4Array[i].innerHTML = line2;
        cuadroElement?.appendChild(line4Array[i]);
      }
    }
  };

  return cuadro();
}
