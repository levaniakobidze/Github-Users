import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {AiFillGithub} from 'react-icons/ai'

const url =
  "https://api.github.com/users?fbclid=IwAR38FgsXaRvSOfHASafpU5-yGjCUK9lDNQiBn4TJlWpvxP_Fry48lg6a8-o";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSerachTerm] = useState("");

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setSerachTerm(e.target.value);
  };

  console.log(users.length);
  return (
    <div className="whole-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <div className="input-cont">
          <input
            type="text"
            name=""
            id=""
            placeholder="type here"
            onChange={handleChange}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>
        <div className="underline"></div>
        <div className="cards-wrapper">
          {users
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.login.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => {
              return (
                <>
                  <ul key={user.id} className="cards-cont">
                   
                    <div className="card-cont">
                      <a  className="link" href={user.html_url} target='_blank'  >
                      <div className="image">
                        <img src={user.avatar_url} alt="das" />
                      </div>
                      <div className="card-info">
                        <h1>{user.login} <AiFillGithub /></h1>
                      </div>
                      </a>
                    </div>
                
                  </ul>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
