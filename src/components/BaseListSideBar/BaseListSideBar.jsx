import React from "react";

function BaseListSideBar(props) {
  const { formData } = props;

  return (
    <div>
      <form onSubmit={formData} className="d-flex flex-wrap">
        
        <div className="border border-danger rounded mx-1">
          <div>
            <input className="mx-1" type="checkbox" id="filter100"></input>
            <label htmlFor="filter100">1-99 LEI </label>
          </div>
          <div>
            <input className="mx-1" type="checkbox" id="filter1000"></input>
            <label htmlFor="filter1000">100-999 LEI </label>
          </div>
          <div>
            <input className="mx-1" type="checkbox" id="filter10000"></input>
            <label htmlFor="filter10000">1000-9999 LEI </label>
          </div>
        </div>
        <input
          className="btn btn-outline-dark mx-1 border-danger shadow"
          type="submit"
          value="Filter By Price"
        />
      </form>
    </div>
  );
}

export default BaseListSideBar;
