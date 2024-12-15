
calcularTotal=function(subtotal,descuento,iva){
    totalPago= subtotal-descuento+iva
    return totalPago
}


calcularporcentajeDescuento=function(cantidad){
    let descuento=0
    if(cantidad<3){
        descuento=1
    } else if(cantidad>=3&&cantidad<=5){
        descuento=3
    } else if(cantidad>=6 && cantidad<=11){
        descuento=4
    }else if (cantidad>=12){
        descuento=5
    }
    return descuento

}

calcularIva=function(monto,porcentajeDescuento){
    

    valorIvaNormal= monto-porcentajeDescuento
    valorIva=valorIvaNormal*0.12

    return valorIva
}

calcularSubtotal=function(precio,cantidad){
    totalPagar=precio*cantidad
    return totalPagar

}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento=0
    if(cantidad<3){
        descuento=subtotal
    } else if(cantidad>=3&&cantidad<=5){
        descuento=subtotal*0.03
    } else if(cantidad>=6 && cantidad<=11){
        descuento=subtotal*0.04
    }else if (cantidad>=12){
        descuento=subtotal*0.05
    }
    return descuento
}

validarCampoString=function(string,idComponente){
    let campoLleno
    let tamanio=string.length
    campoLleno=true
    if(string==""){
        mostrarTexto(idComponente,"CAMPO VACIO")
        campoLleno=false
        return campoLleno}
        if(tamanio<4||tamanio>100){
            mostrarTexto(idComponente,"VALOR INCORRECTO")
            valorCorrecto=false
            return valorCorrecto
        }else{
            mostrarTexto(idComponente,"")
            valorCorrecto=true
            return valorCorrecto
        }

    }


validarCampoString2=function(string,idComponente){
let tamanio=string.length
let valorCorrecto=true
if(tamanio<10||tamanio<100){
    mostrarTexto(idComponente,"VALOR INCORRECTO")
    valorCorrecto=false
    return valorCorrecto
}else{
    mostrarTexto(idComponente,"")
    valorCorrecto=true
    return valorCorrecto
}
}



validarCampoPrecio=function(string,idComponente){
    let valorCorrecto
    valorCorrecto=true
    if(isNaN(string)){
        mostrarTexto(idComponente,"CAMPO VACIO")
        valorCorrecto=false
        return valorCorrecto
    }

    if(string<0 || string>50){
        mostrarTexto(idComponente,"CANTIDAD INVALIDA")
        valorCorrecto=false
        return valorCorrecto
    }else{
        mostrarTexto(idComponente,"")
        valorCorrecto=true
        return valorCorrecto


    }

}

validarCampoCantidad=function(string,idComponente){
    let valorCorrecto
    valorCorrecto=true
    if(isNaN(string)){
        mostrarTexto(idComponente,"CAMPO VACIO")
        valorCorrecto=false
        return valorCorrecto
    }

    if(string<0 || string>100){
        mostrarTexto(idComponente,"CANTIDAD INVALIDA")
        valorCorrecto=false
        return valorCorrecto
    }else{
        mostrarTexto(idComponente,"")
        valorCorrecto=true
        return valorCorrecto

    }
}  
validarProducto=function(producto){
    let productoValida
    let productoInvalido
    let tamanio=producto.length;
    productoValida=true
    productoInvalido=false
    if (tamanio>=5 && tamanio<=10 ){
        return true
    } else{
        return false
    }
}