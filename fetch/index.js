/**
 *  calling api from javascript | fetch api
 */


// const makeRequest = (url,Data) =>{
//     fetch(url,Data)
//     .then((res) =>{
//         if (!res.ok) {
//             throw new Error(`Error:${res.status}`)
//         }
//        return res.json() 
//     })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
// }

//get all data
    // const getData = () => {
    //     makeRequest('https://jsonplaceholder.typicode.com/posts')
    // }
    // getData();

//create a new data 
    // const sendData = () => {
    //     makeRequest('https://jsonplaceholder.typicode.com/posts',{
    //         method: 'POST',

    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },

    //         body: JSON.stringify({
    //           title: 'Hello world',
    //           body: 'hello programmer',
    //           userId: 1,
    //         }),
    //     })
    // }
    // sendData();
//update data
    // const updateData = () =>{
    //     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             title: 'hello world',
    //             body: 'hello world',
    //             userId: 1,
    //           }),
    //           headers: {
    //             'Content-type':'application/json'
    //           },
    //     })
    // }
    // updateData()

//update single data 
    // const updateSingleData = () =>{
    //     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             title: 'hello programmers',
    //           }),
    //           headers: {
    //             'Content-type':'application/json'
    //           },
    //     })
    // }
    // updateSingleData();

//delete data 
    // const deleteData = () =>{
    //     makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
    //         method: 'DELETE',
    //         body: JSON.stringify({
    //             title: 'hello programmers',
    //           }),
    //           headers: {
    //             'Content-type':'application/json'
    //           },
    //     })
    // }
    // deleteData();





/**
 *  calling api from javascript | fetch api using await 
 */

const makeRequest = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        const message = `Error:${res.status}`
         throw new Error(message)
    }
    const data = await res.json();
    return data;
}


const getData = () =>{
    makeRequest()
    .then((response) =>console.log(response))
    .catch((error) => console.log(error))
}

getData();