import { get_personajes } from "./consulta.js";


$('#buttonImages').on('click', async function () {
  const personajes = await get_personajes()

  // Este es el nombre del personaje seleccionado
  const pj = $('#nombre').val()

  // imagenes del personaje seleccionado. Lo buscamos usando el "find"
  const imagenes = personajes.find( per => per.name == pj).imagenes
  
  /* esta es otra forma, usando el "for of"
  let imagenes;
  for (personaje of personajes) {
    if (personaje.name == pj) {
      imagenes = personaje.imagenes
      break
    }
  }
  */

  // primero limpiamos el modal
  $('.personajes').empty()
  
  // Ahora vamos a crear una lista de etiquetas <img> y las agregamos al modal
  const imagenesPjTemplate = imagenes.map(
    elem => $('.personajes').append(`<img src="assets/imgs/${pj}/${elem}">`)
  )

  // capturamos el click sobre las imagenes dentro del modal
  $('.personajes img').on('click', function () {
    // obtenemos la ruta de la imagen (El valor del atributo "src" de la imagen)
    const ruta_img = $(this).attr('src')

    // modificamos el fondo del div "preview"
    $('#preview').css('background-image', `url("${ruta_img}")`)
    $('#preview').attr('data-img', ruta_img)

    // finalmente cerramos el modal
    $('#imagenesModal').modal('toggle')
  })

})
