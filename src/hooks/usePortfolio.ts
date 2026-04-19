import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { loadPortfolio } from "../store/slices/portfolioSlice";

const usePortfolio = () => {
  const { data, status, error } = useAppSelector((state) => state.portfolio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPortfolio());
    }
  }, [status, dispatch]);

  return {
    data,
    status,
    error,
  };
};
export default usePortfolio;
