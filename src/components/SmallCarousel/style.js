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
  .slick-prev {
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
  margin-top: 30px;
  padding-left: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export { Main, SlickSlider, Slide };

export const Card = styled.div`
  width: 250px;
  height: 310px;
  background-color: #fbfbfb;
  margin-bottom: 40px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  .title {
    padding-top: 5px;
    padding-left: 15px;
  }
  .price {
    color: #46a358;
    font-weight: 700;
    transform: translateY(-20px);
  }
`;
