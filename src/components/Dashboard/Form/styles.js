import styled from 'styled-components';

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


