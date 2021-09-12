import axios from "axios"; 

export default axios.create({
    baseURL: "http://localhost:8087/api", 
    timeout: 3000,
    withCredentials: false,
    headers: {
        "Content-typ": "application/json",
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,POST,DELETE'
    }
}); 

// const client =  axios.create({
//     baseURL: "http://localhost:8087/api", 
//     headers: {
//         "Content-typ": "application/json"
//     }
// }); 
// export default function App(){
//     const [post, setPost] = React.useState(null);

//     React.useEffect(() => {
//         axios.post(`${client.baseURL}/add`).then((response) => {
//           setPost(response.data);
//         });
//       }, []);
    
//     function createPost() {
//     axios
//         .post(client, {
//         title: "Hello World!",
//         body: "This is a new post."
//         })
//         .then((response) => {
//         setPost(response.data);
//         });
//     }

//     if (!post) return "No post!"

//     return (
//     <div>
//         <h1>{post.title}</h1>
//         <p>{post.body}</p>
//         <button onClick={createPost}>Create Post</button>
//     </div>
//     );
// }
