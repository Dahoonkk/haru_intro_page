import { useEffect, useState } from "react";
import axios2 from "./axios2";

const getUserInfo2 = ({userId}) => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios2.get(userId)
        .then(res => {
            //console.log(res.data);
            setUserInfo(res.data);
        })
    }, [])
    
    return userInfo;
}

export default getUserInfo2;