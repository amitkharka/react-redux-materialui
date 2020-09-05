import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { appAction } from "../../../store/actions/appAction";

function Home() {
    const result = useSelector(createSelector(
        state => state.appReducer,
        res => res.result
    ));

    const dispatch = useDispatch();

    return (
        <div className="App">
            <button
                onClick={() =>
                    dispatch(appAction())
                }
            >
                Car
            </button>
            {result}
            {/* <h1>{counter.vehicle}</h1> */}
        </div>
    );
}

export default Home;