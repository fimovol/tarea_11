let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]



//1.1. De la tarea anterior: Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

function creartabla(){
    let root = document.getElementById("root")
    let table = document.createElement("table")
    table.setAttribute("border","1")
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let tr = document.createElement("tr")
    let array = ["id", "name", "type", "base_damage", "base_hp", "speed"]
    array.map((elemento)=>{
        let th = document.createElement("th")
        th.textContent = elemento
        addEventlistenerfuncion(th,tbody)
        tr.append(th)
    })
    

    ordenar(pokemons,tbody)

    thead.append(tr)
    table.append(thead)
    table.append(tbody)
    root.append(table)
}
creartabla()
//1.2. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

function addEventlistenerfuncion(elemento,tbody){
    // let th = document.createElement("th")
    // th.textContent = "elemento"
    let th =elemento
    th.addEventListener("click", (e)=> {
        let key = e.srcElement.innerHTML
        let ordenado = ordenarProductosPorAtributo(key,pokemons)
        tbody.innerHTML = ""
        ordenar(ordenado,tbody)
    })
}
function ordenar(objeto,tbody){
    objeto.map( (elemento,index)=> {
        let trbody = document.createElement("tr")
        for (const key in pokemons[index]){
            let td = document.createElement("td")
            td.textContent = pokemons[index][key]
            trbody.append(td)

        }
        tbody.append(trbody)
    })
}
function ordenarProductosPorAtributo(atributo,objeto){
    if (typeof objeto[0][atributo] === "string"){
        return objeto.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof objeto[0][atributo] === "number"){
        return objeto.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}

//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.
 
let persona = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}
 
function verificarSiEstanLlenos(objeto){
    for (const key in objeto){
       
        if(objeto[key]==""){
            completar(key,objeto)
        }
    }
    console.log(objeto)
}
// verificarSiEstanLlenos(persona)

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
 
function completar(valor,objeto){
    let promp = ""
    
    while(promp == ""){
        promp = prompt(`el valor ${valor} no esta completalo`)
    }
    objeto[valor] = promp
}

//4. Te enviaron una base de datos de usuarios:
 
let users_1 = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
 
// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
 
users_1.map( (elemento) => {
    // verificarSiEstanLlenos(elemento)
})

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
 
let users_2 = [
    {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
 
users_2.sort( (a,b)=> {
    if(a.edad > b.edad){
        return 1
    }
    if(a.edad < b.edad){
        return -1
    }
    return 0
})

console.log(users_2)
//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
// 1. Recorrer el arreglo users
// 2. Obtener los valores de cada llave
// 3. Formar la frase nombre apellido tiene edad años y es profesion
// 4. Escribir esta frase en el navegador linea por linea
// Ejemplo: "Andres Soto tiene 28 años y es profesor"
 
users_2.map( (elemento)=> {
    let nom = elemento.nombre
    let ape = elemento.apellido
    let edad = elemento.edad
    let prof = elemento.profesion

    let p = document.createElement("p")
    p.innerText = `${nom} ${ape} tiene ${edad} y es ${prof}`
    root.append(p)
})


//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
 
console.log(ordenarProductosPorAtributo("asd",users_2))


//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"
 
let boton = document.createElement("input")
boton.setAttribute("value","Aceptar")
boton.setAttribute("type","button")
boton.addEventListener("click",()=> {
    alert("De acuerdo!")
})
root.append(boton)
//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
 
boton.addEventListener("mouseover",()=> {
    boton.style.display = "none"
})

//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.
    
function nuevousuario(){
    let asd = prompt(`Ingrese la informacion del usuario (nombre, apellido, edad, profesion)`)
    let separado = asd.split(",")
    let objeto = {
        id: users_2.length + 1,
        created_date: creacion()
    }
    let index = 0
    for(let key in users_2[0]){
        objeto[key] = separado[index]
        index++
    }
    users_2.push(objeto)
    return users_2
}

console.log(nuevousuario())

//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.
 
function creacion(){
    let hora = new Date()
    return `${hora.toString()}`
}

//12.
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]
 
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)
 
console.log(ordenarProductosPorAtributo("created_at",users)) 

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.

function filtrarporatribto(mess,arraydeobjetos){
    
    return arraydeobjetos.filter( (elemento,i) => {
        let palabras = arraydeobjetos[i].created_at
        let fecha = palabras.split("-")
        let mes = fecha[1]
        if(mess == mes){
            return true
        }else{
            return false
        }
    })
}
console.log(filtrarporatribto("09",users))

