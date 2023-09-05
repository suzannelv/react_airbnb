import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
    /** 定义内部的状态 */
    const [showRight, setShowRight] = useState(false);
    const [posIndex, setPosIndex] = useState(0);
    const totalDistanceRef = useRef();

    /** 组件渲染完毕, 判断是否显示右侧的按钮 */
    const scrollContentRef = useRef();
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
        const totalDistance = scrollWidth - clientWidth;
        totalDistanceRef.current = totalDistance;
        setShowRight(totalDistance > 0);
    }, [props.children]);

    /** 组件渲染完毕, 判断是否显示右侧的按钮 */
    function rightClickHandle() {
        const newIndex = posIndex + 1;
        const newEl = scrollContentRef.current.children[newIndex];
        // console.log(newEl.offsetLeft);
        const newElOffsetLeft = newEl.offsetLeft;
        scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
        setPosIndex(newIndex);

        // 是否继续显示右侧的按钮
        setShowRight(totalDistanceRef.current > newElOffsetLeft);
    }
    return (
        <ViewWrapper>
            <button className="left">left</button>
            {showRight && (
                <button className="right" onClick={rightClickHandle}>
                    right
                </button>
            )}
            <div className="scroll-content" ref={scrollContentRef}>
                {props.children}
            </div>
        </ViewWrapper>
    );
});

ScrollView.propTypes = {};

export default ScrollView;
