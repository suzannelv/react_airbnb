import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
    const { title, subtitle = "titre par défaut" } = props;
    return (
        <HeaderWrapper>
            <h2 className="title">{title}</h2>
            <div className="subtitle">{subtitle}</div>
        </HeaderWrapper>
    );
});
// 使用rmcp生成的代码可以做类型验证
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default SectionHeader;
