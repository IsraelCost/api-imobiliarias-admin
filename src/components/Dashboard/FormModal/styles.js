import styled from 'styled-components';

import { CloseOutline } from '@styled-icons/evaicons-outline/';

export const Container = styled.div`
  position: fixed;
  -webkit-position: fixed;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .7);
  display: ${ props => {
    if (!props.display) {
      return 'none';
    } else {
      return 'flex';
    }
  } };
  align-items: center;
`;

export const Box = styled.div`
  width: 55rem;
  height: auto;
  max-height: 60rem;
  margin: auto;
  border-radius: 10px;
  background: var(--white);
  padding: 3rem;
  padding-right: 0;
  position: relative;

  @media(max-width: 845px) {
    max-width: 85%;
  }

  @media(max-height: 660px) {
    max-height: 80vh;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: #f3f6f9;
  margin: 2rem 0;
  display: block;
`;

export const BtnClose = styled(CloseOutline)`
  color: #cfd2da;
  width: 3rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;
