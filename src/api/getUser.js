import { useEffect, useState } from "react";
import axios from "./axios";

const getUserInfo = ({userId}) => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(userId)
        .then(res => {
            //console.log(res.data);
            setUserInfo(res.data);
        })
    }, [])
    
    return userInfo;
}

export default getUserInfo;