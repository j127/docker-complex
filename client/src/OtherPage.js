import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <p>This is another page.</p>
            <Link to="/">Home</Link>
        </div>
    );
};
