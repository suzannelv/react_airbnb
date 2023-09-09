import RoomItem from "@/components/room-item";
import { RoomsWrapper } from "./style";

import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

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
                        />
                    );
                })}
            </div>
            {isLoading && <div className="cover"></div>}
        </RoomsWrapper>
    );
});

export default EntireRooms;
