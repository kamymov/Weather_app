import { useState } from "react";
import Styles from './SearchList.module.css'
import { useDispatch } from "react-redux";
import { Choose_location } from "../Redux/action/Location.action";

const SearchLocation = () => {

    const [location, setLocation] = useState();
    const dispatch = useDispatch()

    const searchLocation = () => {
        dispatch(Choose_location())
    }

    const searchAndSuggestLocation = (event) => {
        setLocation(event.target.value);
    }

    return <div className={Styles.main}>

        <input className={Styles.search_input}
            type="text"
            placeholder="نام شهر یا کشور"
            onChange={searchAndSuggestLocation}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    searchLocation();
                }
            }} />

    </div>


}

export default SearchLocation;