import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";

function Freebook() {
    const filterData = list.filter((data) => data.category === "free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <div key={item.id} style={{ padding: '0 10px' }}>
                            <div
                                className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
                                style={{
                                    backgroundColor: '#f5f5f5',
                                    padding: '10px',
                                    borderRadius: '18px',
                                    textAlign: 'center',
                                    height: '500px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {/* Free Tag */}
                                <div className="badge badge-secondary mb-2">Free</div> {/* Add Free tag here */}
                                
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        maxHeight: '280px',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                    }}
                                />
                                <h3 style={{ fontWeight: 'bold', fontSize: '1rem', margin: '10px 0' }}>
                                    {item.title}
                                </h3>

                                {/* Price and Buy Now button section */}
                                <div
                                    className="flex justify-between items-center"
                                    style={{ marginTop: '10px' }}
                                >
                                    <p className="text-left font-semibold">Price: ₹{item.price}</p>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded"
                                        style={{ textAlign: 'right' }}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Freebook;
