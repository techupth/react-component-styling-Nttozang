// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    let bgColor = props.color === "primary" ? "#074EE8" : props.color === "secondary" ? "#07A4E8" : undefined;
    return (
      <button
        css={css`
          background-color: ${bgColor};
          margin: 10px;
          width: 171.19px;
          height: 50px;
          border: none;
          border-radius: 4px;
          color: white;
          font-family: 'Sarabun';
          font-style: normal;
          font-weight: 400;font-size: 16px;
          line-height: 18px;
        `}
      >
        Large
      </button>
    );
  }


export default Button