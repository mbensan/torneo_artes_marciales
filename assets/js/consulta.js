// La variable "url" no se ve desde el mundo exterior
const url = 'data/dbz.json'

export const get_personajes = async function (){
  let datos = await fetch('data/dbz.json')
  datos = await datos.json()
  return datos.personajes
}

