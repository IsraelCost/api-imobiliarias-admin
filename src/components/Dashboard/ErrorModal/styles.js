import styled from 'styled-components';

import { Error } from '@styled-icons/boxicons-regular/Error'

import { CloseOutline } from '@styled-icons/evaicons-outline/';

export const ContainerModal = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .7);
  display: flex;
  align-items: center;
`;

export const ContainerError = styled.div`
  width: 50rem;
  height: auto;
  max-height: 60rem;
  margin: auto;
  border-radius: 10px;
  background: var(--white);
  padding: 3rem;
  padding-right: 0;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7rem;

  p {
    font-size: 1.8rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media(max-width: 560px) {
    width: 85%;
  }
`;

export const AlertIcon = styled(Error)`
  color: red;
  width: 10rem;
  margin: auto;
`;

export const BtnClose = styled(CloseOutline)`
  color: #cfd2da;
  width: 3rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;
