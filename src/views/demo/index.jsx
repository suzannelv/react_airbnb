import Indicator from "@/base-ui/indicator";
import PropTypes from "prop-types";
import React, { memo } from "react";

const Demo = memo((props) => {
    return (
        <div>
            <div className="control">
                <button>prev</button>
                <button>next</button>
            </div>
            <Indicator></Indicator>
        </div>
    );
});

Demo.propTypes = {};

export default Demo;
