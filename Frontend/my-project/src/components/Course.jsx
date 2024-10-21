import React, { useEffect, useState } from 'react';
import Cards from "./Cards"; 
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log("API Response:", res.data); // Log the entire response
                setBook(res.data); // Make sure this is the correct path to your data
            } catch (error) {
                console.log("Error fetching books:", error);
            }
        };
        getBook();
    }, []);

    console.log("Books State:", book); // Log the current state of books

    return (
        <div className="container mx-auto px-4 mt-28">
            <div className="text-center">
                <h1 className="text-2xl font-semibold md:text-4xl">
                    We are delighted to have you{" "}
                    <span className="text-pink-500">here! :)</span>
                </h1>
                <p className="mt-4 text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <Link to="/">
                    <button className="bg-red-400 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-500 transition duration-200">
                        Back
                    </button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {book.length > 0 ? (
                    book.map((item) => (
                        <div key={item.id} className="p-4">
                            <Cards item={item} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">No books available.</p> // Message when there are no books
                )}
            </div>
        </div>
    );
};

export default Course;
