import Header from "../components/header";
import Post from "../components/post";
import '../global.css'

export default function About() {

  return (
    <div>


      <div className="main_container">

        <div className="sidebar">
          <Header text="About"></Header>
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
