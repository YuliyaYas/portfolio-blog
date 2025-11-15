import React from "react";
import Form from "../components/FormContactUs";
import Carousel from "../components/Carousel";
import Overlay from "./Overlay";
import FromEmailSubscription from "../components/FormEmailSubscription";
import Book from "./Book";
// import GalleryShow from '../components/GalleryShow';
import "../stylesheet/Homepage.scss";

const HomePage = ({ closed, handleImageClick, handleCloseClick, info }) => {
  return (
    <div className="homepage" style={{ marginBottom: "100px" }}>
      {closed === true ? (
        ""
      ) : (
        <Overlay
          handleCloseClick={handleCloseClick}
          overlayImg={info}
          rightArrow={false}
          leftArrow={false}
        />
      )}
      <FromEmailSubscription />

      <div className="featured">
        <h2>Latest Works</h2>

        <div className="featured-img">
          <div className="block-desc">
            <h3>Rushnyk</h3>
            <div className="info-desc">
              {" "}
              11x14inches, acrylic on wood, 2022{" "}
            </div>
            <br />
            <p>
            This painting is a partial recreation of the XIX-century Ukrainian embroidered towel of the Poltava region. Embroidered towels have multiple purposes and meanings, and each of its ornament has a certain purpose and significance. It was believed that women who embroidered towels with good thoughts and intentions would bring luck and happiness to the towel’s owner. Each region had its own style and color pallet that was influenced by the way of their living.
            </p>
          </div>
          <div className="block-img" style={{ textAlign: "end" }}>
            <img
              src={require("../imgs/paintings/rushnyk.jpg")}
              alt="rushnyk"
              onClick={handleImageClick}
            />
          </div>
        </div>

        <div className="featured-img">
          <div className="block-img">
            <img
              src={require("../imgs/paintings/rooster.jpg")}
              alt="Rooster"
              onClick={handleImageClick}
            />
          </div>
          <div className="block-desc">
            <h3>Resistance (sold)</h3>
            <div className="info-desc"> 24x20inches, acrylic, 2022</div>
            <br />
            <p>
              The ceramic rooster has become a symbol of resistance for the
              Ukrainian people. A ceramic rooster was miraculously still
              attached on top of a kitchen cabinet, in an apartment building
              that was destroyed by Russian invaders in the village of
              Borodyanka, near Kyiv. This rooster is a symbol of the invincible
              Ukrainian people, holding on to their lives and beliefs, despite
              the destruction around them.
            </p>
          </div>
        </div>

        <a href="/paintings-ethno" className="general-btn center">
          <span>View New Collection</span>
        </a>
      </div>
      <Book/>
      <h2>Selected Works</h2>
      <div style={{ width: "100%", display: "block", marginBottom: "60px" }}>
        <Carousel />
      </div>
      <br />

      <div id="intro">
        <img
          src={require("../imgs/yuliya_profile_gallery.jpg")}
          alt="portrait"
          id="portrait"
        />
        <p>
          Yuliya Yasenetska is a Ukrainian-born multidisciplinary artist based in Ann Arbor, MI, 
          working primarily in painting while exploring diverse mediums. As both artist and 
          human evolve, she continuously seeks new methods of expression. Her work prioritizes 
          aesthetic and emotional experience over hidden meanings, using light and vibrant 
          colors to awaken forgotten joy....
          <a href="/about-bio" className="general-btn">
            <span>Read More</span>
          </a>
        </p>
      </div>
      <Form />
      {/* Instagram */}
    </div>
  );
};

export default HomePage;
