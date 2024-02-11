import { Outlet } from "react-router-dom";
import Postslists from "../components/Postslist";


function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <Postslists />
   
      </main>
    </>
  
  );
}

export default Posts;
export async function loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
};