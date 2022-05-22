let menu = document.getElementById('menu');
let agregar = document.getElementById('boton-palabra');
let borrar = document.getElementById('boton-borrar');
let nuevo_juego = document.getElementById('nuevo-juego');
let texto = document.getElementById('texto');
let palabras = [];
let oculto = document.getElementById('oculto');
let enviar = document.getElementById('enviar');
let ahorcado = document.getElementById('ahorcado');
let juego = document.getElementById('juego');
let adivinar;

function jugar(palabrita){
  let palabra_a_adivinar = document.getElementById('palabra-a-adivinar');
  for (let i=0; i<palabrita.length; i++){
    if (palabrita[i] == " "){
      // palabra_a_adivinar.innerHTML += '<span class="espacio">' + palabrita[i] + '</span>';
      palabra_a_adivinar.innerHTML += '<span class="espacio">' + " " + '</span>';
    }else{
      // palabra_a_adivinar.innerHTML += '<span class="letra">' + adivinar[i] + '</span>';
      palabra_a_adivinar.innerHTML += '<span class="letra">' + palabrita[i] + '</span>';
    }
  }
}

agregar.onclick = () => {
  agregar.style.visibility = 'hidden';
  // let palabra = prompt("Ingrese una palabra");
  oculto.style.visibility = 'visible';
  texto.focus();
};

enviar.onclick = () => {
  let palabra = texto.value;
  palabra = palabra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  palabra = palabra.replace(/\s\s+/g, " ");
  if (palabra!="" && palabra.length>3){
    palabras.push(palabra.trim());
    // alert("Lista de palabras: " + palabras);
  } else{
    alert("ERROR. Ingrese palabras de MÁS de 3 caracteres");
  }
  agregar.style.visibility = 'visible';
  oculto.style.visibility = 'hidden';
  texto.value = '';
  agregar.focus();
}

borrar.onclick = () => {
  let confirm = prompt('Está seguro? Pulse la tecla Y para confirmar, y cualquier otra tecla para cancelar:');
  if ( confirm.toLowerCase() == "y"){
    palabras = [];
    alert("Éxito! Se han borrado todas las palabras");
  } else {
    // alert("Ningún cambio realizado! Lista de palabras: " + palabras);
  }
};

nuevo_juego.onclick = () =>{
    if (palabras.length>=1){
        juego.style.display = "flex";
        menu.style.display = "none";
        let random = -1;
        while (random<0){
          random = Math.round(Math.random()*palabras.length-1);
        }
        alert(random);
        adivinar = palabras[random];
        juego.innerHTML = '<div style="width:200px; height: 150px; background-color:red;">hola hola</div>';
        juego.innerHTML += '<div id="palabra-a-adivinar">'
        jugar(adivinar);
        juego.innerHTML += '</div>';
        juego.innerHTML += '<div id="el-input"><label for="adivinador">Ingrese una letra:</label><input type="text" name="adivinador" id="adivinador" maxlength="1"></div>';
        let adivinador = document.getElementById('adivinador');
        adivinador.focus();
    } else {
        alert("Ingrese al menos una palabra para poder jugar");
    }
}