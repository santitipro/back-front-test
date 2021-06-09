import styled from "styled-components";

export const Wrapper = styled.div`
  .content {
    background-color: #35c2a9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: #000;
    padding-bottom: 50px;
  }

  .content-wrapper {
    margin-top: 50px;
  }

  .logo {
    height: 150px;
    pointer-events: none;
  }
`;
