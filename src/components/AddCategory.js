import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setQueries }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setQueries((queries) => {
                if (queries.includes(inputValue)) {
                    return queries
                }
                else {
                    return [inputValue, ...queries]
                }
            });
            setInputValue("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};
AddCategory.propTypes = {
    setQueries: PropTypes.func.isRequired,
};
