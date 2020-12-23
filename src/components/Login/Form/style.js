import styled from 'styled-components';

import { ShowAlt } from '@styled-icons/boxicons-regular';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0 0 1.75rem;
  padding: 1.5rem 1.8rem;
  background: var(--input-bg);
  height: 5rem;
  border-radius: 8px;
  transition: background .05s ease;
  &:focus {
    background-color: #e4e6ef;
  }
`;

export const LoginButton = styled.button`
  width: 9.6rem;
  height: 5rem;
  color: var(--white);
  border-radius: 10px;
  background: var(--btn-login-bg);
  cursor: pointer;
  font-weight: 600;
  margin: 1.2rem auto;
  transition: background .15s ease;
  &:hover {
    background: #4b76e4;
  }
`;

export const ShowPass = styled(ShowAlt)`
  width: 3rem;
  position: absolute;
  color: var(--gray);
  margin-bottom: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;
