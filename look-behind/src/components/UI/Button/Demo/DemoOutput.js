import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DemoOutput is running!')
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
// tells react that this component ,react should look at the props this component gets and check the new value for all those props and compere it to the previos value props got!!
