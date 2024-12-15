calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT


    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let valorTotalFormato

    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto")
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio")
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad")
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal=calcularSubtotal(precioProducto,cantidad)
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal", valorSubtotal)
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad)
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los métodos cuando invoca la funcion.        
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblDescuento", valorDescuento)
    
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA=calcularIva(valorSubtotal,valorDescuento)
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
    mostrarTexto("lblIva", valorIVA)
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal

    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal)

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo


    // Validar Campos Vacios
    if( validarCampoString(nombreProducto,"lblError1") & validarCampoPrecio(precioProducto,"lblError3") & validarCampoCantidad(cantidad,"lblError2")){
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
        valorTotalFormato=valorTotal.toFixed(2);
        mostrarTexto("lblTotal", "Valor a pagar por "+ cantidad+ " " +nombreProducto+ " "+" con "+ valorDescuento+" "+"USD de descuento es: "+" "+valorTotalFormato+" "+"USD")
    }else{
        mostrarTexto("lblTotal","0.0");
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblIva","0.0");
    }
    // Validar Campo Cantidad

    }

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto","")
    mostrarTextoEnCaja("txtCantidad","")
    mostrarTextoEnCaja("txtPrecio","")
    mostrarTexto("lblSubtotal","0.0")
    mostrarTexto("lblDescuento","0.0")
    mostrarTexto("lblIva","0.0")
    mostrarTexto("lblTotal","0.0")
    mostrarTexto("lblError1","")
    mostrarTexto("lblError2","")
    mostrarTexto("lblError3","")

}

/* SI TODO FUNCIONA, HACER UN PUSH */