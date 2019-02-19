//EventListeners
document.querySelector('#generar-nombre').addEventListener('submit', e => {
    e.preventDefault();
    let url = getUrl();
    conectarYCargar(url);
});

//A partir de los inputs devuelve el url a solicitar
function getUrl() {   
    let origen = document.querySelector('#origen').value;
    let genero = document.querySelector('#genero').value;
    let cantidad = document.querySelector('#cantidad').value;
    
    let url = '';
     url += 'http://uinames.com/api/?';
     // Si hay origen agregarlo a la URL
     if(origen !== '') {
         url += `region=${origen}&`;
     }
     // Si hay un genero agregarlo a la URL
     if(genero !== '') {
         url += `gender=${genero}&`;
     }
     // Si hay una cantidad agregarlo a la URL
     if(cantidad !== '') {
         url += `amount=${cantidad}&`;
        }
    return url;
}

//conecta con ajax y carga la lista al dom
function conectarYCargar(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(this.status === 200) {
                const nombres = JSON.parse( this.responseText ) ;
                node = `<ul class="lista">`;
                nombres.forEach( nombre => {
                    node += `<li>${nombre.name}</li>`;
                });
                node += `</ul>`;
                document.getElementById('resultado').innerHTML = node;
        }
    }
    xhr.send();
}