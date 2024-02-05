import LandingText from "./components/landingtext";
import Sticky from "./components/sticky";
import Post from "./components/post";
import './global.css'

export default function Home() {

  return (
    <div>

      <LandingText></LandingText>

      <div className="main_container">

        <div className="sidebar">
          <Sticky></Sticky>
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
