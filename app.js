const mostrar = () => {
    let dato = new Date();
    let hh = formato(dato.getHours());
    let mm = formato(dato.getMinutes());
    let ss = formato(dato.getSeconds());
    document.getElementById('hora').innerHTML = `${hh}:${mm}:${ss}`;
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let dia = dias[dato.getDay()]
    let fe = dato.getUTCDate();
    let mes = meses[dato.getMonth()];
    let fechaA = `${dia}  ${fe}  ${mes}`;
    document.getElementById('fecha').innerHTML = fechaA;
    

}

setInterval(mostrar, 1000);

const formato = (time) => {
    if (time < 10) {
        time = '0' + time;
        return time;
    } else {
        return time;
    }
}