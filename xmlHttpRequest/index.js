console.clear();

const makeRequest = (methos,url,Data) =>{
    return new Promise((resolve,reject) =>{

        const xhr = new XMLHttpRequest();

        xhr.open(methos,url)
        
        //set request headers
        xhr.setRequestHeader('Content-type','application/json')
      
        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data));
        }
    
        //error check
        xhr.onerror = (e) =>{
            console.log(e.message);
        }

        xhr.send(JSON.stringify(Data));
    })
}


//fetch all data 
const getData = () => {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(res);
    })
}

//create a new data
const sendData = () => {
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
}

//update data
const updateData = () => {
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'footabl',
        body: 'barishal',
        userId: 1,
    })
}

//update single data 
const updateSingleData = () => {
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
        body: 'barisal',
    })
}

//delete data 
const deleteData = () =>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')
}

getData();