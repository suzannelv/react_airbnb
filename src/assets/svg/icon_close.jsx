import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconClose = memo(() => {
    return (
        <svg
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="false"
            focusable="false"
            style={styleStrToObject(
                "height: 3em; width: 3em; display: block; fill: rgb(255, 255, 255);"
            )}
        >
            <path
                d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
                fillRule="evenodd"
            ></path>
        </svg>
    );
});

export default IconClose;
