import React from 'react';
import Slider from 'react-slick';
import '../../styles/homeSectionC.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSectionC = () => {
  const videos = [
    "https://www.youtube.com/embed/zHgx8OsLiPw?autoplay=1&mute=1&loop=1&playlist=zHgx8OsLiPw",
    "https://www.youtube.com/embed/hjjkS_wY0q0?autoplay=1&mute=1&loop=1&playlist=hjjkS_wY0q0",
    "https://www.youtube.com/embed/AlpQetNTvVA?autoplay=1&mute=1&loop=1&playlist=AlpQetNTvVA"
  ];

  // Custom tombol next
  const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      ❯
    </div>
  );

  // Custom tombol prev
  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      ❮
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 detik
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="home-section-c">
      <Slider {...settings} className="video-carousel">
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <iframe
              src={video}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSectionC;
