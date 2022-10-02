import React from "react";
import Form from "../components/FormContactUs";
import Carousel from "../components/Carousel";
import Overlay from "./Overlay";
import FromEmailSubscription from "../components/FormEmailSubscription";
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
              This painting is a partial recreation of the XIX century Ukrainian
              embroidered towel of the the Poltava region. Embroidered towels
              have multiple purposes and meanings, and each of its ornament has
              certain purpose and significance. It was believed that women who
              embroidered towels in good thoughts and intentions would bring
              luck and happiness to the towel’s owner. Each region had its own
              style and color pallet that was influenced by the way of their
              living.
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

        <div className="featured-img">
          <div className="block-desc">
            <h3>Kharkiv (sold)</h3>
            <div className="info-desc">
              {" "}
              11x14inches, acrylic on wood, 2022{" "}
            </div>
            <br />
            <p>
              Kharkiv Regional State Administration was one of the many
              buildings destroyed in Ukraine. It will be rebuilt, but we have to
              aim to help people currently in need.
            </p>
          </div>
          <div className="block-img" style={{ textAlign: "end" }}>
            <img
              src={require("../imgs/paintings/kharkiv.jpg")}
              alt="Kharkiv Ukraine"
              onClick={handleImageClick}
            />
          </div>
        </div>

        <div className="featured-img">
          <div className="block-img">
            <img
              src={require("../imgs/paintings/peacock.jpg")}
              alt="Peacock"
              onClick={handleImageClick}
            />
          </div>
          <div className="block-desc">
            <h3>Peacock</h3>
            <div className="info-desc">
              {" "}
              24x36inches, acrylic and 24k gold leaf on wood, 2022
            </div>
            <br />
            <p>
              Nature never seise to amaze us. Every feather, every shade of
              color paints a picture of the grace and royalty.
            </p>
          </div>
        </div>

        <div className="featured-img">
          <div className="block-desc">
            <h3>Leleka</h3>
            <div className="info-desc">
              {" "}
              24x30inches, acrylic on wood, 2021{" "}
            </div>
            <br />
            <p>
              Storks. Symbol of new beginnings, renewal, and faithfulness. To me
              - it’s also a symbol of Ukraine. I grew up in Lviv, Ukraine and
              spent most of my childhood summers at my grandparent’s house in
              the small village Dunaiv, two hours from the city. What a contrast
              it was! A rural scenery of vast green lands, pine forests and
              river, cutting the village in half. Poppy flowers, among endless
              fields of wheat, bathing in the sun. Storks were always out in the
              fields. Distinct, noble, - they’d walk around green patches of
              grass in search of food. They’d leave every fall to migrate to
              Africa, and I’d leave the village to come back to my city. They
              would always return in spring. Faithful, strong and free. We are
              all birds, always flying around the wold in search of a better
              patch of grass. But we all belong to just one place of heritage,
              one place we call home.
            </p>
          </div>
          <div className="block-img" style={{ textAlign: "end" }}>
            <img
              src={require("../imgs/paintings/stork.jpg")}
              alt="Leleka"
              onClick={handleImageClick}
            />
          </div>
        </div>

        <a href="/paintings" className="general-btn">
          <span>View More Paintings</span>
        </a>
      </div>
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
          Yuliya Yasenetska is a Ukrainian born artist and currently works in
          New York. Yuliya is a multidisciplinary artist, focused primarily on
          painting. She enjoys experimenting with different mediums. Humans
          constantly change, and as an artist, Yuliya continuously seeks
          improvement and varied methods to express herself. She focuses on how
          her artwork looks and feels, not on ingraining hidden meanings into
          the art. Through the light and colorful depictions of her artwork she
          tries to awaken forgotten joy....
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
