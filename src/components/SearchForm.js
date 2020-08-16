import React from "react";


const SearchForm = (props) => {

  return (
    <div className="d-flex justify-content-center mx-auto">
      <form>
        <input
          placeholder="Search for your coworker here"
          name="search"
          type="text"
          className="form-control-lg search-font mx-auto"
          onChange={(event) => props.startSort(event)}
        />
      </form>
    </div>
  );

}

export default SearchForm;