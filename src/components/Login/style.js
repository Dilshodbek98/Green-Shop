import { Tabs } from "antd";
import styled from "styled-components";
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .iks {
    position: absolute;
    top: -41px;
    right: 15px;
    cursor: pointer;
    transition: all 0.1s;
    :active {
      transform: scale(0.7);
    }
  }
  .heading {
    display: flex;
    margin-top: 50px;
    margin-bottom: 53px;
    .line-vertical {
      width: 1px;
      height: 16px;
      background-color: #3d3d3d;
      margin: 0 10px;
    }
  }
  .label {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 14px;
  }
  input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    font-size: 14px;
    padding: 12px 14px;
    line-height: 16px;
    color: #3d3d3d;
    margin-bottom: 16px;
    :focus {
      outline: 1px solid #46a358;
    }
    ::placeholder {
      color: #a5a5a5;
    }
  }
  .password {
    color: #3d3d3d;
    margin-bottom: 57px;
  }
  .hide {
    position: absolute;
    right: 115px;
    top: 220px;
    cursor: pointer;
  }
  .forgot {
    font-size: 14px;
    line-height: 16px;
    color: #46a358;
    position: absolute;
    right: 96px;
    top: 280px;
    cursor: pointer;
  }
  .loginBtn {
    width: 300px;
    height: 45px;
    background-color: #46a358;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #46a358;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 46px;
    cursor: pointer;
    transition: all 0.2;
    :active {
      transform: scale(0.95);
    }
  }
  .or {
    display: flex;
    width: 300px;
    justify-content: center;
    margin-bottom: 27px;
    .line-horizontal {
      height: 1px;
      background-color: #eaeaea;
      width: 100px;
      transform: translateY(10px);
    }
    p {
      font-size: 13px;
      line-height: 16px;
      color: #3d3d3d;
    }
  }
  .google {
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
    padding-left: 80px;
    cursor: pointer;
    transition: all 0.2s;
    .text {
      font-size: 13px;
      line-height: 16px;
      color: #727272;
      transform: translateY(5px);
    }
    :active {
      transform: scale(0.95);
    }
  }
  .facebook {
    margin-bottom: 58px;
  }
`;

const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  position: relative;
  .iks {
    position: absolute;
    top: -48px;
    right: 15px;
    cursor: pointer;
    transition: all 0.2s;
    :active {
      transform: scale(0.7);
    }
  }
  .heading {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #3d3d3d;
    p {
      font-size: 20px;
      line-height: 16px;
      cursor: pointer;
      color: #3d3d3d;
    }
    p:last-child {
      color: #46a358;
    }
    .line-vertical {
      width: 1px;
      height: 16px;
      background-color: #3d3d3d;
      margin: 0 10px;
    }
  }

  .label {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 14px;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    font-size: 14px;
    padding: 12px 14px;
    line-height: 16px;
    color: #3d3d3d;
    margin-bottom: 16px;
    :focus {
      outline: 1px solid #46a358;
    }
    ::placeholder {
      color: #a5a5a5;
    }
  }
  input:last-child {
    margin-bottom: 58px;
  }
  .hide {
    position: absolute;
    right: 115px;
    top: 286px;
    cursor: pointer;
  }
  .registerBtn {
    width: 300px;
    height: 45px;
    background-color: #46a358;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #46a358;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 47px;
    cursor: pointer;
    transition: all 0.2;
    :active {
      transform: scale(0.95);
    }
  }
  .or {
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    .line-horizotal {
      height: 1px;
      background-color: #eaeaea;
      width: 100px;
      transform: translateY(-5px);
    }
    p {
      font-size: 13px;
      line-height: 16px;
      color: #3d3d3d;
    }
  }
  .google {
    display: flex;
    width: 300px;
    height: 40px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
    padding-left: 80px;
    cursor: pointer;
    transition: all 0.2s;
    .text {
      font-size: 13px;
      line-height: 16px;
      color: #727272;
      transform: translateY(5px);
    }
    :active {
      transform: scale(0.95);
    }
  }
  .facebook {
    margin-bottom: 40px;
  }
`;
const Title = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;
  line-height: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const TabsAnt = styled(Tabs)`
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: var(--primaryColor) !important;
  }
  width: 500px;
  height: 530px;
  margin: 20px auto;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
`;

export { Main, TabsAnt, LoginBox, Title, RegisterBox };
