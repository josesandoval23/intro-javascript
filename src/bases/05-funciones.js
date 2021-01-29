//funciones en js
//const saludar = function ( nombre ) {
    //return `hola, ${ nombre }`;
//}

const saludar2 = ( nombre )=> {
    return `hola, ${ nombre }`;
}
const saludar3 = ( nombre )=> `hola, ${ nombre }`;
const saludar4 = () => `hola mundo`;


//console.log ( saludar ('goku'))
console.log( saludar2(`vegeta`) );
console.log( saludar3('goku') );
console.log ( saludar4());

const getUser = () => 
    ({
    uid: 'ABC123',
    username: 'el_papi1502',
})
const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) =>
({
        uid: 'ABC23',
        username: nombre
});
const usuarioActivo = getUsuarioActivo('julian');
console.log( usuarioActivo )