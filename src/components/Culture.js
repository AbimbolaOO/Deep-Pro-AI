import React from "react";
import TextImgComponent from "./TextImgComponent";
import TextComp from "./TextComp";
import Ourteam from "./Ourteam";

export default function Culture() {
  return (
    <div className="mycontent">
      <TextImgComponent header1="Life at DeepProAI" reverse={false}>
        As a fully distributed company we’ve found a formula that works. We
        truly believe and practice a work-life balance which allows us to create
        our best work.
      </TextImgComponent>
      <TextComp />
      <TextImgComponent
        header1="Working together drives our curiosity"
        reverse={true}
      >
        We blend our knowledge and skill across disciplines in an effort to both
        teach and learn from ourselves, our clients, and our greater community.
      </TextImgComponent>

      <TextImgComponent header1="Always creating and growing" reverse={false}>
        The web application landscape doesn’t stand still. We know where the web
        is going (and, in some cases, we’re leading the way). We’re able to
        ensure our customers and community are ready to take full advantage of
        that future.
      </TextImgComponent>
      <Ourteam />
    </div>
  );
}
