export default function validarCrearProducto(valores) {
  let errores = {};

  // validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es Obligatorio";
  }

  //validar el empresa
  if (!valores.empresa) {
    errores.empresa = "Nombre de Empresa es Obligatorio";
  }

  // validar la url
  if (!valores.url) {
    errores.url = "La URL del producto es Obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL mal formateada o no valida";
  }

  // validar descripcion
  if (!valores.descripcion) {
    errores.descripcion = "Agrega una descripcion de tu Producto";
  }

  return errores;
}
