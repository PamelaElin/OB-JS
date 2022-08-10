const compra=["harina", "cebolla", "espinaca", "zanahoria", "sal"]
compra.push("Aceite de Girasol")
compra.pop()

const peliculas=[
    {titulo: "Volver al futuro",
        director: "Robert Zemeckis",
        fecha: new Date(1985, 11, 26)
    },
    {
        titulo: "Tarzán",
        director: "Kevin Lima, Chris Buck",
        fecha: new Date(1999, 6, 8)
    },
    {
        titulo: "El quinto elemento",
        director: "Luc Besson",
        fecha: new Date(1997, 4, 22)
    }
]
const peliculasPosterioresAEnero = peliculas.filter(pelicula => pelicula.fecha>new Date(2010, 0, 1))
const directores = peliculas.map(pelicula => {
    return pelicula.director
})

const titulos=peliculas.map(pelicula => {
    return pelicula.titulo
})
const directoresYtitulos = directores.concat(titulos); 

const directoresTitulosProp = [...directores, ...titulos]