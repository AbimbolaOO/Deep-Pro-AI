import React from "react";
import UiCardComponent from "./UiCardComponents";
import { Illustration } from "../assets";

export function Services() {
  return (
    <div className="mycontent">
      <UiCardComponent
        header1="Always at your service"
        image={Illustration.imageOne}
      >
        From research to vision to implementation, DeeproAI translates bold
        ideas into industry-leading software, mobile, and web applications that
        advance your business. Our professional services ensure the digital
        products we produce set a high water mark for engagement, efficiency,
        and elegance.
      </UiCardComponent>
    </div>
  );
}
