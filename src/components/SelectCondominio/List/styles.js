import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: initial;
`;

export const ListComponent = styled.div`
  width: 75%;
  height: 70vh;
  margin: 3rem auto 2.5rem;
  border-right: 1px solid var(--gray);
  border-left: 1px solid var(--gray);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    width: 1rem;
    background: var(--gray);
    border-radius: 15px;
  }
`;

export const BtnAddItem = styled.button`
  padding: 1.2rem 1.8rem;
  max-width: 20rem;
  align-self: center;
  background: #28a745;
  border-radius: 10px;
  color: var(--white);
  cursor: pointer;
  transition: background 0.15s ease;
  font-weight: 600;

  &:hover {
    background: #2ca046;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  color: var(--gray);
  width: 75%;
  margin: 3rem auto 0;
`;
