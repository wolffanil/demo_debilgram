import { Outlet } from "react-router-dom";
import styled from "styled-components";

function AuthLayout() {
  return (
    <Wrapper>
      <LeftBlock>
        <Outlet />
      </LeftBlock>
      <RightBlock>
        <img src="" alt="" />
      </RightBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftBlock = styled.section`
  background-color: var(--backgraund-color);
  border-right: 1px solid var(--text-color);
  width: 50%;
  padding: 140px 109px 169px 35px;
  min-height: 1060px;
`;

const RightBlock = styled.div`
  width: 50%;
  background-color: var(--backgraund-color);
  min-height: 1060px;
`;

export default AuthLayout;
