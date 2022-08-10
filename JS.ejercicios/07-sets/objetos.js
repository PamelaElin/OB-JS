const datos= {
    nombre: "Elin",
    apellido: "Sosa",
    edad: 29,
    altura: 151,
    eresDesarrollador: true
};

const edad = datos.edad;

const lista = [
    {
        ...datos
    },{
        nombre: "Belu",
        apellido: "Viglietti",
        edad: 25,
        altura:165 ,
        eresDesarrollador: false
    },{
        nombre: "Carla",
        apellido: "Juarez",
        edad: 29,
        altura: 158,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);

