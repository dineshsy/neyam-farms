import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 32px;
  }

  .menu {
    width: 100%;
  }
`;
