import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./leadSlice";
import { useDispatch, useSelector, useStore } from "react-redux";

export const makeLeadStore = () => {
  return configureStore({
    reducer: {
      leads: leadReducer,
    },
  });
};

export type LeadAppStore = ReturnType<typeof makeLeadStore>;
export type LeadRootState = ReturnType<LeadAppStore["getState"]>;
export type LeadAppDispatch = LeadAppStore["dispatch"];
export const useAppDispatch = useDispatch.withTypes<LeadAppDispatch>()
export const useAppSelector = useSelector.withTypes<LeadRootState>()
export const useAppStore = useStore.withTypes<LeadAppStore>()
