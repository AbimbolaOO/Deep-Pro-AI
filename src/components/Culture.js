import React from "react";
import UiCardComponent from "./UiCardComponents";
import TextComp from "./TextCards";
import Ourteam from "./Ourteam";
import { Illustration } from "../assets";

export default function Culture() {
  return (
    <div className="mycontent">
      <UiCardComponent
        header1="Life at DeepProAI"
        image={Illustration.imageFour}
        reverse={false}
      >
        As a fully distributed company we’ve found a formula that works. We
        truly believe and practice a work-life balance which allows us to create
        our best work.
      </UiCardComponent>
      <TextComp />
      <UiCardComponent
        header1="Working together drives our curiosity"
        image={Illustration.imageThree}
        reverse={true}
      >
        We blend our knowledge and skill across disciplines in an effort to both
        teach and learn from ourselves, our clients, and our greater community.
      </UiCardComponent>

      <UiCardComponent
        header1="Always creating and growing"
        image={Illustration.imageTwo}
        reverse={false}
      >
        The web application landscape doesn’t stand still. We know where the web
        is going (and, in some cases, we’re leading the way). We’re able to
        ensure our customers and community are ready to take full advantage of
        that future.
      </UiCardComponent>
      <Ourteam />
    </div>
  );
}
