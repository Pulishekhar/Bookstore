import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

const Course = () => {
  return (
    <div className="container mx-auto px-4 mt-28">
      <div className="text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-pink-500">here! :)</span>
        </h1>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero hic perspiciatis facere animi in, dolores minima dolor. Quis doloremque sit consectetur, optio facilis, quo cupiditate unde velit dicta quos nisi?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus laboriosam architecto quaerat. Quod quam modi, ipsum facilis ad, a nisi sed eius ullam suscipit officiis tempora labore iure obcaecati?
        </p>
      <Link to = "/">
      <button className="bg-red-400 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-500 transition duration-200">
          Back
        </button>
      </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Added gap-6 here */}
        {list.map((item) => (
          <div key={item.id} className="p-4"> {/* Added padding to each card */}
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
