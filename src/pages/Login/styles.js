import styled from 'styled-components';

export const PageLogin = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: var(--white);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BoxLogin = styled.div`
  width: 40rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 450px) {
    width: 90%;
  }
`;
