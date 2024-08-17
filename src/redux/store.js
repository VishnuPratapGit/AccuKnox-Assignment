import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './widgetsSlice';

const store = configureStore({
    reducer: {
        widgets: widgetsReducer,
    },
});

export default store;
