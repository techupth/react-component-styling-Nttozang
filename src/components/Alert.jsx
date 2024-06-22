// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FrownIcon from "../assets/frown.svg"
import CheckIcon from "../assets/check-circle.svg";
import TriangleIcon from "../assets/alert-triangle.svg";
import AlertIconcircle from "../assets/alert-circle.svg";

function Alert(props) {
    let bgColor = props.color === "error" ? "#F9C8C8"  :
                    props.color === "warning" ? "#F9D9C8" :
                    props.color === "info" ? "#F9EBC8" :
                    props.color === "success" ? "#CEF7CD" :
                    undefined;

    let AlertIcons = props.icon === "error" ? FrownIcon : 
                    props.icon === "warning" ? TriangleIcon : 
                    props.icon === "info" ? AlertIconcircle :
                    props.icon === "success" ? CheckIcon :
                    undefined;

    return (
        <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${bgColor};
            padding: 5px;
            margin: 20px;
            width: 650px;
            height: 76px;
            color: black;
            border-radius: 10px;
            font-family: "Kanit", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
        `}>
            <img src={AlertIcons} alt="" css={css`
                width: 24px;
                height: 24px;
                margin-right: 10px; /* ระยะห่างระหว่างไอคอนกับข้อความ */
            `} />
            {props.text}
        </div>
        
    )
}


export default Alert