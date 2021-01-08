import React from "react";


export default function Form(props) {
    return (
      <div>
        <form className="form ">
          <input
            value={props.search}
            name="search"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search for Employee"
          />        
        </form>
      </div>
    );
}

