import styled from 'styled-components';

import { Edit, Trash } from '@styled-icons/boxicons-regular';

export const Item = styled.div`
  width: 55rem;
  height: 10rem;
  margin: 3rem auto;
  background: var(--gray);
  color: var(--white);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 7px;
  transition: background .15s linear;

  p span {
    font-size: 1.3rem;
  }

  &:hover {
    background: #7e8ba5;
  }

  @media(max-width: 866px) {
    width: 75%;
  }
`;

export const ActionsContainer = styled.div`
  width: auto;
`;

export const IconEdit = styled(Edit)`
  color: var(--btn-login-bg);
  width: 4rem;
  cursor: pointer;
`;

export const IconTrash = styled(Trash)`
  color: red;
  width: 4rem;
  cursor: pointer;
`;
