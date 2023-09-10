import Indicator from "@/base-ui/indicator";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo((props) => {
    const names = ["aaa", "bbb", "nnn", "kkk", "mmm"];
    const [selectIndex, setSelectIndex] = useState(0);
    function toggleClickHandle(isNext = true) {
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
        if (newIndex < 0) newIndex = names.length - 1;
        if (newIndex > names.length - 1) newIndex = 0;
        setSelectIndex(newIndex);
        console.log(newIndex);
    }
    return (
        <DemoWrapper>
            <div className="control">
                <button onClick={(e) => toggleClickHandle(false)}>prev</button>
                <button onClick={(e) => toggleClickHandle(true)}>next</button>
            </div>
            <div className="list">
                <Indicator selectIndex={selectIndex}>
                    {names.map((item) => {
                        return <button key={item}>{item}</button>;
                    })}
                </Indicator>
            </div>
        </DemoWrapper>
    );
});

Demo.propTypes = {};

export default Demo;
