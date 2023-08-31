// RTK méthode:
import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
    const res = await getHomeGoodPriceData();
    // console.log(res.list);
    return res;
});

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload;
        },
    },
    extraReducers: {
        [fetchHomeDataAction.fulfilled](state, { payload }) {
            state.goodPriceInfo = payload;
        },
    },
});
export const { changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
