const menuBtn = document.getElementById('menuBtn');
const navegacion = document.getElementById('navegacion');
menuBtn.addEventListener('click', () => {
  const abierto = navegacion.classList.toggle('abierto');
  menuBtn.setAttribute('aria-expanded', abierto);
});

const mensajeCarrito = document.getElementById('mensajeCarrito');
document.querySelectorAll('.agregar').forEach((boton) => {
  boton.addEventListener('click', () => {
    const producto = boton.dataset.producto;
    const precio = Number(boton.dataset.precio);
    mensajeCarrito.textContent = `${producto} agregado a tu pedido de prueba (${precio.toLocaleString('es-CO', {style:'currency', currency:'COP', maximumFractionDigits:0})}).`;
  });
});

const cantidad = document.getElementById('cantidad');
const tipoCafe = document.getElementById('tipoCafe');
const total = document.getElementById('total');
const resultadoCalculo = document.getElementById('resultadoCalculo');
function calcularTotal() {
  let unidades = Number(cantidad.value);
  if (!Number.isFinite(unidades) || unidades < 1) unidades = 1;
  if (unidades > 20) unidades = 20;
  cantidad.value = unidades;
  const valor = unidades * Number(tipoCafe.value);
  total.textContent = valor.toLocaleString('es-CO', {style:'currency', currency:'COP', maximumFractionDigits:0});
  resultadoCalculo.textContent = ` ${unidades} café(s) · cálculo de demostración.`;
}
document.getElementById('menos').addEventListener('click', () => { cantidad.value = Math.max(1, Number(cantidad.value || 1) - 1); calcularTotal(); });
document.getElementById('mas').addEventListener('click', () => { cantidad.value = Math.min(20, Number(cantidad.value || 1) + 1); calcularTotal(); });
document.getElementById('calcular').addEventListener('click', calcularTotal);
tipoCafe.addEventListener('change', calcularTotal);
cantidad.addEventListener('change', calcularTotal);

const formulario = document.getElementById('formContacto');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  document.getElementById('mensajeFormulario').textContent = `Gracias, ${nombre}. El formulario se validó correctamente (demostración, no se envió a un servidor).`;
  formulario.reset();
});