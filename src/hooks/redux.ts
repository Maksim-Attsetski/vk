import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dispatchType, rootReducerType} from "../redux/store";


export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
export const useTypedDispatch = () => useDispatch<dispatchType>()
