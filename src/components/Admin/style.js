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
  width: 500px;
  height: 300px;
  margin: 47px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-top: 30px;
  .iks {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    transition: all 0.1s;
    :active {
      transform: scale(0.7);
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
`;

export { Main, LoginBox };
