console.clear();

// console.log(window);



    // axios
    // .get('https://jsonplaceholder.typicode.com/todos')
    // .then((res) => console.log(res.data))
    // .catch((err) => console.error(err));

    const makeRequest = async (config) =>{
        return await axios(config)
    }

    //get all data 
        const getData = () =>{
            makeRequest('https://jsonplaceholder.typicode.com/posts')
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
        }

    //post data
        const postData = ()=> {
              makeRequest({
                url : 'https://jsonplaceholder.typicode.com/posts',
                method : 'POST',
                data: JSON.stringify({
                    title: 'hello world',
                    body: 'hello world programmers',
                    userId: 1,
                  })
              })
              .then((response) => console.log(response.data))
              .catch((err) => console.log(err));
        }

    //update data
        const updateData = ()=> {
              makeRequest({
                url : 'https://jsonplaceholder.typicode.com/posts/1',
                method : 'PUT',
                data: JSON.stringify({
                    title: 'hi',
                    body: 'hello world programmers',
                    userId: 1,
                  })
              })
              .then((response) => console.log(response.data))
              .catch((err) => console.log(err));
        }

        
    //update single data
            const updateSingleData = ()=> {
                makeRequest({
                  url : 'https://jsonplaceholder.typicode.com/posts/1',
                  method : 'PATCH',
                  data: JSON.stringify({
                      userId: 2,
                    })
                })
                .then((response) => console.log(response.data))
                .catch((err) => console.log(err));
          }


        //delte data
        const deleteData = ()=> {
            makeRequest({
                 url : 'https://jsonplaceholder.typicode.com/posts/1',
                method : 'DELETE'
            })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
        }

        deleteData();

