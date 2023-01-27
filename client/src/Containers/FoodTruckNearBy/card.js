import React, { Component } from "react";

const imageUrl =
  "https://play-lh.googleusercontent.com/yPtnkXQAn6yEahOurxuYZL576FDXWn3CqewVcEWJsXlega_nSiavBvmaXwfTGktGlQ";
export const SampleCard = ({cardData}) =>  {
    return (
      <div>
        <img src={imageUrl} height="150" width="150"></img>
        <h1>Card title</h1>
      </div>
    );
}
