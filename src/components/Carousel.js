import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import "../stylesheet/Carousel.scss";

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const carouselImages = [
    {url: 'MushTown.jpg', name: 'Colony, 24x30inches, acrylic on wood, 2020'},
    {url: 'peacock.jpg', name: "24x36inches, acrylic and 24k gold leaf on wood, 2022"},
    {url: 'stork.jpg', name: '24x30inches, acrylic on wood, 2021'},
    {url: 'TurtleVille.jpg', name: 'World Bearing, 36x24inches, oil on canvas, 2016'},
    {url: 'Snaility.jpg', name: 'Snaility, 20x20inches, acrylic on wood, 2017'}
  ]
  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {carouselImages.map(art => {return <div className="embla__slide" key={art.name}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={require(`../imgs/paintings/${art.url}`)}
                  alt="Colony"
                />
                 <p className="selected-img-desc">{art.name}</p>
              </div>
            </div>})}
            
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
