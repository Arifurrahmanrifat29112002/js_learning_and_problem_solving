
const fetchData = async (config) => {
    try {
        const res = await axios(config)
        return res.data;
    } catch (error) {
        throw Error(error);
    }
}


const postsElement = document.querySelector(".posts");//main div

const loadData = async () => {

   const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

   posts.map(post => {

        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        postsElement.appendChild(postElement);

   })
}


loadData();