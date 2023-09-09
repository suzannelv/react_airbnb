import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    // changeCurrentPageAction,
    fetchRoomListAction,
} from "@/store/modules/entire/actionCreators";

const EntirePagination = memo(() => {
    const { totalCount, currentPage, roomList } = useSelector(
        (state) => ({
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
            roomList: state.entire.roomList,
        }),
        shallowEqual
    );
    const totalPage = Math.ceil(totalCount / 20);
    const startCount = currentPage * 20 + 1;
    const endCount = (currentPage + 1) * 20;

    //事件处理逻辑
    const dispatch = useDispatch();
    function pageChangeHandle(event, pageCount) {
        // 点击下一页加载时，回到顶部
        window.scrollTo(0, 0);
        // console.log(pageCount);
        // 更新最新的页码：redux=>currentPage
        // dispatch(changeCurrentPageAction(pageCount - 1));
        dispatch(fetchRoomListAction(pageCount));
    }
    return (
        <PaginationWrapper>
            {!!roomList.length && (
                <div className="info">
                    <Pagination count={totalPage} onChange={pageChangeHandle} />
                    {/* currentpage: 1, 1-20 */}
                    {/* currentpage: 2, 21-40 */}
                    <div className="desc">
                        第{startCount}-{endCount}个房源，共超过{totalCount}
                    </div>
                </div>
            )}
        </PaginationWrapper>
    );
});

export default EntirePagination;
