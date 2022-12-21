import React from "react";
import "./PunkHeader.css";
import { GoSearch } from "react-icons/go";
import { BsCartCheckFill } from "react-icons/bs";

const PunkHeader = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="list">
              <li className="list-item">
                <a href="#" className="list-link active-list">
                  Home
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  Contact
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  Beers
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  Average
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="list-link">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="search-bar">
            <i>
              <GoSearch />
              Search
            </i>
            <i>
              <BsCartCheckFill />
            </i>
          </div>
        </div>
      </header>
    </>
  );
};

export default PunkHeader;
