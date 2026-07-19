import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./Card";
import { data } from "autoprefixer";

// function App() {
function App(){
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>setPosts(data))
    .catch((error)=>console.log(error));
  },[]);

  return  (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <hr />
          </div>
      ))};
    </div>
  );
  
};



// function App() {
//   return (
//     <div style={{display: "flex", gap:"20px", flexWrap: "wrap"}}>
//       <Card 
//           image="https://picsum.photos/300/200"
//           title="React Card"
//           description="This is a reusable React card component."
//           buttonText="Read More"
//           />
     
//     </div>
//   )
// }


export default App;