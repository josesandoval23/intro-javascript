const persona = {
    nombre: 'tony',
    apellido: ' stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 234242,
        lat: 31.212,
        lng: 23.2323,
    }
};
//console.table ( persona );
console.log ( persona );
const persona2 = {... persona };
persona2.nombre = 'peter';
console.log ( persona );
console.log ( persona2 )
