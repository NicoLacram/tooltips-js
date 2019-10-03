const icono = document.getElementById('icono');
const tooltip = document.getElementById('tooltip');

const calcularPosToll = () => {
 // Calculamos las coordenadas del icono.
    const x = icono.offsetLeft;
    const y = icono.offsetTop;

 // Calculamos el tamaño del tooltip.
 const anchoTooltip = tooltip.clientWidth;
 const altoTooltip = tooltip.clientHeight;

 // Calculamos donde posicionaremos el tooltip.
 const izquierda = x - (anchoTooltip / 2) + 15;
 const arriba = y - altoTooltip - 20;

  tolltip.style.left = `${izquierda}px`;
  tooltip.style.top = `${arriba}px`;

};

window.addEventListener('load', () => calcularPosToll());
window.addEventListener('resize',() => calcularPosToll());

icono.addEventListener('mouseenter', () =>{
    tooltip.classList.add('activo');
    calcularPosToll();
});

let timer;
icono.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        tooltip.classList.remove('activo');
    },500);
});

tooltip.addEventListener('mouseenter',() => clearTimeout(timer));
tolltip.addEventListener('mouseleave', ()=> tooltip.classList.remove('activo'));