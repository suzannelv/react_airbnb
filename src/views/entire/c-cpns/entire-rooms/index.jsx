import RoomItem from "@/components/room-item";
import { RoomsWrapper } from "./style";

import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const EntireRooms = memo(() => {
    // redux roomList
    const { roomList, totalCount, isLoading } = useSelector(
        (state) => ({
            roomList: state.entire.roomList,
            totalCount: state.entire.totalCount,
            isLoading: state.entire.isLoading,
        }),
        shallowEqual
    );
    // 事件处理
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const itemClickHandle = useCallback(
        (item) => {
            // 在redux中保存点击的item数据
            dispatch(changeDetailInfoAction(item));
            navigate("/detail");
        },
        [navigate, dispatch]
    );
    return (
        <RoomsWrapper>
            <h2 className="title">共{totalCount}多处住所</h2>
            <div className="list">
                {roomList.map((item) => {
                    return (
                        <RoomItem
                            itemData={item}
                            itemWidth="20%"
                            key={item._id}
                            itemClick={itemClickHandle}
                        />
                    );
                })}
            </div>
            {isLoading && <div className="cover"></div>}
        </RoomsWrapper>
    );
});

export default EntireRooms;
