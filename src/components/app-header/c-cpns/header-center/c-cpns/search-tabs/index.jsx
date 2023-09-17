import { TabsWrapper } from "@/components/section-tabs/style";
import classNames from "classnames";

import PropTypes from "prop-types";
import React, { memo, useState } from "react";

const SearchTabs = memo((props) => {
    const { titles, tabClick } = props;
    const { currentIndex, setCurrentIndex } = useState(0);

    function itemClickHandle(index) {
        setCurrentIndex(index);
        if (tabClick) tabClick(index);
    }
    return (
        <TabsWrapper>
            {titles.map((item, index) => {
                return (
                    <div
                        className={classNames("item", {
                            active: currentIndex === index,
                        })}
                        key={item}
                        onClick={(e) => itemClickHandle(index)}
                    >
                        <span classNames="text">{item}</span>
                        <span classNames="bottom"></span>
                    </div>
                );
            })}
        </TabsWrapper>
    );
});

SearchTabs.propTypes = {};

export default SearchTabs;
