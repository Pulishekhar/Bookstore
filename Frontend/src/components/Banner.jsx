import React from "react";
import book from "../../public/book.jpg"; // Import the image without quotes

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row"> {/* Flex column on mobile */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome to Your{" "}
              <span className="text-pink-500">Literary Haven!</span>
            </h1>
            <p className="text-xl font-semibold">
              Welcome to your literary haven, where the world of stories,
              knowledge, and imagination comes alive. Whether you're a seasoned
              reader, our curated collection of books will inspire, educate, and
              captivate you. Dive into the pages of your next adventure,
              discover timeless classics, or explore the latest releases all in
              one place. Your perfect escape awaits in our treasure trove of
              literature.
            </p>

            <div className="flex items-center gap-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                  />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                  />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center"> {/* Centering the image */}
          <img src={book} className="w-full h-auto md:w-130 md:h-156" alt="Book" /> {/* Responsive image size */}
        </div>
      </div>
    </>
  );
}

export default Banner;
