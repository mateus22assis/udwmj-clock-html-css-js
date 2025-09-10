const horas = document.getElementById('Horas')
const minutos = document.getElementById('Minutos')
const segundos = document.getElementById('Segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date();

    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})
