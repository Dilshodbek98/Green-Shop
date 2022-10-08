import styled from "styled-components";
import Slider from "react-slick";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 12px;

  .slick-prev:before,
  .slick-next:before {
    color: var(--primaryColor);
    font-size: 30px;
  }
  .slick-prev{
    left: -35px;
  }
`;
const SlickSlider = styled(Slider)`
  background-color: #f5f5f580;
  width: 100%;
  .wrapper {
    width: 100%;
  }
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Content = styled.div`
  flex-basis: 100%;
  padding: 70px 0;
  padding-left: 40px;
  .heading-text {
    color: var(--colorSecondary);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
  .heading {
    font-size: 70px;
    line-height: 70px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 5px;
    span {
      color: var(--primaryColor);
    }
  }
  .title{
    color: var(--thirdColor);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const Img = styled.img`
  width: 518px;
  height: 518px;
`;

export { Main, SlickSlider, Slide, Content, Img };
