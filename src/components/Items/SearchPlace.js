import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { filterByValue } from "../../actions/userAction";
import useInput from "../../hooks/useInput"
import MyInput from "../Items/UI/Input/MyInput"
const SearchPlace = () => {
    const filter = useInput('')
    const dispatch = useDispatch();
    function filterByInput(e) {
        let input = e.target.value;
        dispatch(filterByValue({ value: input }))
    }
    return (
        <div className='control' style={{ minWidth: "300px" }}>
            <MyInput
                onChange={e => { filterByInput(e) }}
                style={{ width: "100%" }}
                placeholder='Write the title of entity'
                type='text' />
        </div>
    )
}
export default SearchPlace