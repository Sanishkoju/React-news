import React from "react";

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                value={props.query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={props.isLoading}
                onChange={props.handleQuery}
            />   
            <input
                disabled={props.isLoading || !props.query}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;