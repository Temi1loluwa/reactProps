import { useState } from "react";

const Header = ({ handleChange, handleFilter }) => {
  const [entry, setEntry] = useState("");

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">HOOKED</h1>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text number"
              placeholder="Search by Movie Title or Rating"
              value={entry}
              onChange={(e) => {
                setEntry(e.target.value);
              }}
            />
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                handleFilter(entry);
              }}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-light"
              style={{ marginLeft: 10, width: 200 }}
              onClick={handleChange}
            >
              Add Movie
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
