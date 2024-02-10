import Header from "../components/header";
import Post from "../components/post";
import '../global.css'

export default function Blog() {

  return (
    <div>


      <div className="main_container">

        <div className="sidebar">
          <Header text="Blog"></Header>
        </div>

        <div className="content">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>


      </div>

    </div>
  );
}
