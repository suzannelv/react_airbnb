import React, { memo } from "react";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
    return (
        <EntireWrapper>
            <div className="filter">filter</div>
            <div className="rooms">rooms</div>
            <div className="pagination">pagination</div>
        </EntireWrapper>
    );
});

export default Entire;
