import styled from 'styled-components';

export const ContainerHeader = styled.header`
  height: 8rem;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 9.9%;
  box-shadow: 0 -2px 15px 0 #000;
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    height: 50%;
  }
`;


export const BtnLogout = styled.div`
  margin-left: auto;
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;

  button {
    padding: .5rem 3rem;
    background: var(--btn-login-bg);
    cursor: pointer;
    border-radius: 5px;
    color: var(--white);
    font-weight: 600;
    transition: background .15s ease;
  }

  button:hover {
    background: #4b76e4;
  }
`;
