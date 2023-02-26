import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSpotify } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>
        <i className="fa-brands fa-spotify"></i> Mini Spotify
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <span>Library</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
