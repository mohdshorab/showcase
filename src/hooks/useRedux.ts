import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import type { RootState } from "../store";

export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);
export const useAppDispatch = () => useDispatch<AppDispatch>();