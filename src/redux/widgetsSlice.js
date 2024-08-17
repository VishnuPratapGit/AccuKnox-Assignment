import { createSlice } from "@reduxjs/toolkit";
import data from "../data.js";

const initialState = data;

const widgetsSlice = createSlice({
    name: "widgets",
    initialState,
    reducers: {
        widgetInputChange: (state, action) => {
            const { categoryId, widgetId, input } = action.payload;
            const category = state.categories.find((cat) => cat.id === categoryId);
            if (category) {
                const widget = category.widgets.find((widget) => widget.id === widgetId);
                if (widget) widget.name = input;
            }
        },

        toggleWidgetFlag: (state, action) => {
            const { categoryId, widgetId, flag } = action.payload;
            const category = state.categories.find((cat) => cat.id === categoryId);
            if (category) {
                const widget = category.widgets.find((widget) => widget.id === widgetId);
                if (widget) widget.flag = flag;
            }
        },
    },
});

export const { toggleWidgetFlag, widgetInputChange } = widgetsSlice.actions;
export default widgetsSlice.reducer;
