import React, { useEffect, useState } from "react";
import store from "./Redux/Store";
import actionProvider from "./Redux/Action";
import { Link } from "react-router-dom";
import KalviumBooks from "../Image/KalviumBooks.png";
import image from "../Image/Go Back.png";

function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);

  store.subscribe(() => {
    setData(store.getState().data.books);
    setLoading(false);
  });

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        store.dispatch(actionProvider());
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const filterdData = data.filter((item) => {
    return item.title.toLowerCase().includes(input.toLowerCase());
  });

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closePopup = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <div className="m-0 p-0 box-border">
        <nav className="flex flex-col md:flex-row justify-between p-5 items-center">
          <img
            className="h-12 w-auto"
            src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
            alt="kalvium logo"
          />
          <input
            className="w-full md:w-2/5 p-3 border border-gray-300 rounded shadow transition duration-500 focus:shadow-lg focus:border-black focus:outline-none mt-2 md:mt-0 md:ml-4"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search Book"
          />
          <Link to="/form">
            <button className="bg-red-500 w-full md:w-24 h-10 text-white px-4 py-2 rounded hover:shadow-lg transition duration-300 mt-2 md:mt-0 md:ml-4">
              Sign Up
            </button>
          </Link>
        </nav>
        {loading ? (
          <div className="h-96 flex justify-center items-center pl-[-10] mt-10">
            <img src={KalviumBooks} alt="" />
          </div>
        ) : selectedBook ? (
          <div className="mt-20 flex justify-center">
            <div className="w-2/4 shadow-md p-10">
              <div className="grid gap-2">
                <div
                  className="mb-1 flex items-end cursor-pointer"
                  onClick={closePopup}
                >
                  <img className="w-8 mb-5" src={image} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-1 justify-center">
                  <h1 className="font-bold text-3xl col-span-2">
                    {selectedBook.title}
                  </h1>
                  <img
                    className="row-span-6 mt-3"
                    src={selectedBook.imageLinks.thumbnail}
                    alt=""
                  />
                  <p className="text-2xl">
                    <strong>Author : </strong> {selectedBook.authors.join(", ")}
                  </p>
                  <p className="text-1.5xl">
                    <strong>Subtitle :</strong> {selectedBook.subtitle}
                  </p>
                  <p>
                    <strong>Average Rating : </strong>
                    {selectedBook.averageRating}
                  </p>
                  <p>
                    <strong>Language : </strong> {selectedBook.language}
                  </p>
                  <p>
                    <strong>Published Date : </strong>
                    {selectedBook.publishedDate}
                  </p>
                  <p className="line-clamp-5">
                    <strong>Description : </strong> {selectedBook.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
          <div className="Books mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center p-5 md:p-10">
            {filterdData.map((item) => (
              <div
                key={item.id}
                className="grid justify-center hover:shadow-lg transition duration-300 p-5 cursor-pointer"
                onClick={() => handleBookClick(item)}
              >
                <img src={item.imageLinks.thumbnail} alt="" />
                <div className="">
                  <p className="w-28 line-clamp-2 text-gray-900">
                    {item.title}
                  </p>
                </div>
                <div className="flex">
                  {item.averageRating ? (
                    <>
                      <p>{item.averageRating} </p>
                      <p className="text-gray-700"> ★ Free</p>
                    </>
                  ) : (
                    <p className="text-gray-700">Free</p>
                  )}
                </div>
              </div>
            ))}
          </div>
            <footer className="text-center flex justify-center items-center mt-10 bg-red-500">
            <h2 className="p-7 text-white">Made with ❤ Kalvium</h2>
          </footer>
          </>
        )}
      </div>
    
    </>
  );
}

export default Home;
