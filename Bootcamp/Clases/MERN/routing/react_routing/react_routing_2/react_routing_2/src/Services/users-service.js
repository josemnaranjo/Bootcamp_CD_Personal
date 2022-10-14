
const axios = require('axios').default;


export const getAllUsers = async () => {
    const users= await  axios.get('https://randomuser.me/api/?results=10');

    //axios regresa la info de la API como "data", luego uno ingresa a la info con el nombre que tiene la API
    return users.data.results;
}

export const getOneUser = async () => {
    const user= await  axios.get('https://randomuser.me/api/?seed=foobar');

    console.log(user);

    //axios regresa la info de la API como "data", luego uno ingresa a la info con el nombre que tiene la API
    return user.data.results[0];
}