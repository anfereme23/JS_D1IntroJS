function calcular() {
  const precio = 400000;
  cantidad = document.querySelector("#cantidad").value;
  color = document.querySelector("#color").value;
  var total = Number(cantidad) * Number(precio);
  var totspan = document.querySelector("#total");
  var cantspan = document.querySelector("#cntd");
  totspan.innerHTML = "$" + total;
  cantspan.innerHTML = cantidad;
  colors = document.querySelector("#show-color");
  colors.style.backgroundColor = color;
}
