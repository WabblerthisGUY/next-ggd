import { Parallax } from "@react-spring/parallax";
import Link from "next/link";
import { Slide1 } from "../components/landingComponent/Slide1/Slide1BG";
import { Slide1LeftButton } from "../components/landingComponent/Slide1/Slide1ButtonLeft";
import { Slide1RightButton } from "../components/landingComponent/Slide1/Slide1ButtonRight";
import { Slide1Title } from "../components/landingComponent/Slide1/Slide1Title";

const IndexPage = () => {
  return (
    <Parallax pages={2}>
      <Slide1 />
      <Slide1Title />
      <Slide1LeftButton />
      <Slide1RightButton />
    </Parallax>
  );
};

export default IndexPage;
