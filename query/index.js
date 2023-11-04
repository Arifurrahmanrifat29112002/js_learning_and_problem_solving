console.clear();
const makeRequest = async (url,method,data) => {
    try {
        const result = await $.ajax({
            url : url,
            method: method,
            data : data,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}
// const getData = () => {
//     makeRequest('https://jsonplaceholder.typicode.com/posts','POST',{
//         title: 'js',
//         body: 'calling api | ajax jquery',
//         userId: 1,
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }

// getData();

const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts','POST',{
        title: 'js',
        body: 'calling api | ajax jquery',
        userId: 1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

createData();