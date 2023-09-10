import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props;
    const contentRef = useRef();

    // useEffect(() => {
    //     // console.log(selectIndex, "useEffect");
    //     // 1. 获取selectIndex对应的item
    //     const selectItemEl = contentRef.current.children[selectIndex];
    //     // console.log(selectItemEl);
    //     const itemLeft = selectItemEl.offsetLeft;
    //     const itemWidth = selectItemEl.clientWidth;

    //     // 2. content 的宽度
    //     const contentWidth = contentRef.current.clientWidth;
    //     // console.log(itemLeft, itemWidth, contentWidth);
    //     const contentScroll = contentRef.current.scrollWidth;

    //     // 3. 获取selectIndex要滚动的距离
    //     let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    //     if (distance < 0) distance = 0; //左边的特殊情况处理
    //     const totalDistance = contentScroll - contentWidth;
    //     if (distance > totalDistance) distance = totalDistance; //右边的特殊情况处理
    //     // console.log(distance);

    //     contentRef.current.style.transform = `translate(${-distance}px)`;
    // }, [selectIndex]);
    useEffect(() => {
        const contentElement = contentRef.current;
        if (!contentElement) return; // Check if contentRef.current is defined

        const { children } = contentElement;

        if (
            !children ||
            children.length === 0 ||
            selectIndex < 0 ||
            selectIndex >= children.length
        ) {
            return; // Handle cases where children or selectIndex is out of bounds
        }

        const selectItemEl = children[selectIndex];
        const itemLeft = selectItemEl.offsetLeft;
        const itemWidth = selectItemEl.clientWidth;

        const contentWidth = contentElement.clientWidth;
        const contentScroll = contentElement.scrollWidth;

        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
        if (distance < 0) distance = 0;
        const totalDistance = contentScroll - contentWidth;
        if (distance > totalDistance) distance = totalDistance;

        contentElement.style.transform = `translate(${-distance}px)`;
    }, [selectIndex]);

    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    );
});

Indicator.propTypes = {
    selectIndex: PropTypes.number,
};

export default Indicator;
