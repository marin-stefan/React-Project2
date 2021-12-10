import React from "react";

function BaseListSideBar(props) {
  const { formData } = props;

  
  return (
    <div>
      <form onSubmit={formData}>
        <h6 className="mx-2">Filter by Price</h6>
        <div className="mx-1 border border-warning my-1">
          <input 
            className="mx-1"
            type="checkbox"
            id="filter100"
          ></input>
          <label htmlFor="filter100">1 - 99 Lei </label>
        </div>
        <div className="mx-1 border border-warning my-1">
          <input
            className="mx-1"
            type="checkbox"
            id="filter1000"
          ></input>
          <label htmlFor="filter1000" >100 - 999 Lei </label>
        </div>
        <div className="mx-1 border border-warning my-1">
          <input
            className="mx-1"
            type="checkbox"
            id="filter10000"
          ></input>
          <label htmlFor="filter10000">1000 - 9999 Lei </label>
        </div>
        <br />
       <input 
          className="btn btn-outline-dark mx-2"
          type="submit" 
          value="Filter"/>
      </form>


      
    </div>
  );
}

export default BaseListSideBar;
