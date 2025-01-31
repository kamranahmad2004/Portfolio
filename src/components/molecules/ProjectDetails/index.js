import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null); 

  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!item) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item.title}</h1>

      <Slider {...settings} className="mt-6">
        {item.img?.map((image, index) => (
          <div key={index}>
            <LazyLoadImage
              placeholderSrc={placeholderImage}
              src={image}
              className="w-full h-64 md:h-72 rounded-lg object-cover"
              alt={item.title}
            />
          </div>
        ))}
      </Slider>

      <p className="text-neutral font-medium mt-10 mb-6">
        <span className="font-semibold text-white text-xl">Description:</span>{" "}
        {item.description}
      </p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item.technologies?.map((tech, index) => (
            <li key={index} className="text-neutral">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mt-8">
        {item.liveLink && (
          <a href={item.liveLink} className="mr-4" target="_blank" rel="noreferrer">
            <PrimaryBtn>
              <span>Visit Now</span>
              <FaLink />
            </PrimaryBtn>
          </a>
        )}
        {item.codeLink && (
          <a href={item.codeLink} target="_blank" rel="noreferrer">
            <SecondaryBtn>
              <span>Source Code</span>
              <FaCode />
            </SecondaryBtn>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
