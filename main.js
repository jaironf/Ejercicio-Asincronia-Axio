console.log('Hola Caracola');

const API_URL = "https://jsonplaceholder.typicode.com/users";


// Imprimir por consola la lista (array) de usuarios.
    
axios
    .get(API_URL)
    .then((res)=> console.log(res))
    .catch((error) => console.error(error));



// Imprimir por consola solo el nombre de los usuarios.

axios
    .get(API_URL)
    .then((res)=> {
        res.data.forEach(user => {
            console.log(user.name)
        });
    })

// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
// Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.

let users = [];

    axios
    .get(API_URL)
    .then((res) => users = res.data)
    .catch((error) => console.error(error))  

console.log(users);

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.

// function showUsers() {
//    console.log(users);

// }


// Crea un botón que cuando lo cliques ejecute la función que habías creado.


const btn = document.getElementById('get');
btn.addEventListener('click', showUsers), (e) => {
    showUsers()

}

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

function showUsers() {
    for (const user of users) {
        // console.log(user.name)
        document.getElementById('res').innerHTML += `
        <div class="card card-body mb-4">
      <h5>Status: ${user.name}</h5>
    </div>`
    }
    console.log(users)
}

