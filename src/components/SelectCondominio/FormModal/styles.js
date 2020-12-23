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
  display: ${
    props => {
      return props.display ? 'flex' : 'none';
    }
  };
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

export const FormElement = styled.form`
  max-height: 48rem;
  height: auto;
  overflow-y: auto;
  width: 100%;
  color: #3f4254;

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    width: .5rem;
    border-radius: 15px;
    background: var(--gray);
  }

  @media(max-height: 660px) {
    max-height: 40vh;
  }
`;

export const Field = styled.div`
  height: auto;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.3rem;
`;

export const Input = styled.input`
  height: 4.1rem;
  border: 1px solid #cfd2da;
  display: block;
  width: 98%;
  margin-top: .8rem;
  border-radius: 7px;
  padding: 1.85rem 1.4rem;
`;

export const BtnSubmit = styled.button`
  background: var(--btn-login-bg);
  padding: 1rem 3rem;
  border-radius: 5px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: background .15s ease;
  display: block;
  margin: auto;
  margin-top: 2rem;

  &:hover {
    background: #4b76e4;
  }
`;
