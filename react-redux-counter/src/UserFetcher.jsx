import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function UserFetcher() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.name);

    useEffect(() => {
        dispatch(async (dispatch) => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
            const data = await res.json();

            dispatch({ type: "SET_NAME", payload: data.name });
        })
    }, []);

    return (
        <div>
            <h2>Fetched User: {user || 'Loading...'}</h2>
        </div>
    );
}

export default UserFetcher;
