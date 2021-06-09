import styled from "styled-components";

export const Wrapper = styled.div`
  .content {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-bottom: 50px;
  }

  .logo {
    height: 200px;
    pointer-events: none;
  }
`;
