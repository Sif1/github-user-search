import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

function HomeScreen() {

const [searchValue, setSearchValue] = useState("");
const handleChange = (event: any) => {
      setSearchValue(event.target.value);
    };
const navigate = useNavigate();

const handleSearch = () => {
    navigate(`/${searchValue}`);
}

  return (
    <div className="screen-wrapper">
        <h1 className="home-title">
          Git-A-User!
        </h1>
        <p className="description-text">
          Type in a github username to fetch some cool info about a user.
        </p>
        <div>
            <input
            type="text"
            placeholder="Github username"
            value={searchValue}
            onChange={handleChange}

        />
            <button 
            className="button-style"
            disabled={searchValue ? false : true}
            onClick={handleSearch}>
                Search
            </button>
      </div>
    </div>
  );
}

export default HomeScreen;
