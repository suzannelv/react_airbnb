import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
    /** 定义组件内部的状态 */
    const [showPanel, setShowPanel] = useState(false);
    /** 副作用代码 */
    useEffect(() => {
        function windowHandleClick() {
            setShowPanel(false);
        }
        window.addEventListener(
            "click",
            windowHandleClick,
            // 第三个参数是是否捕获冒泡
            /**
             * 捕获阶段 (useCapture): 这是一个可选的布尔值参数，默认为 false。如果设置为 true，则事件将在捕获阶段（从外向内）被处理；如果设置为 false 或省略，事件将在冒泡阶段（从内向外）被处理。
             */
            true
        );
        return () => {
            window.removeEventListener("click", windowHandleClick, true);
        };
    }, []);
    function profileClickHandle() {
        setShowPanel(true);
    }
    return (
        <RightWrapper>
            <div className="btns">
                <span className="btn">登录</span>
                <span className="btn">注册</span>
                <IconGlobal />
            </div>
            <div className="profile" onClick={(e) => profileClickHandle()}>
                <IconMenu />
                <IconAvatar />
                {showPanel && (
                    <div className="panel">
                        <div className="top">
                            <div className="item register">注册</div>
                            <div className="item login">登录</div>
                        </div>
                        <div className="bottom">
                            <div className="item">出租房源</div>
                            <div className="item">开展体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightWrapper>
    );
});

export default HeaderRight;
