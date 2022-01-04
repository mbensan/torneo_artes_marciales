import { Humano, Saiyajin} from './razas.js'


$('#btnRegistrar').on('click', function () {
  
  const nombre = $('#nombre').val()
  const raza = $('#raza').val()
  const poderPelea = $('#poderPelea').val()

  const img = $('#preview').attr('data-img')

  let nueva_persona;
  if (raza == 'Humano') {
    // creamos un Humano
    nueva_persona = new Humano(nombre, img, poderPelea);
  } else {
    // creamos un Saiyajin
    nueva_persona = new Saiyajin(nombre, img, poderPelea);
  }
  console.log(nueva_persona);
})