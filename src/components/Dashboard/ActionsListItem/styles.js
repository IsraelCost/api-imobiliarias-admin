import styled from 'styled-components';

import { Edit, Trash } from '@styled-icons/boxicons-regular';
import { Gallery } from '@styled-icons/remix-fill';
import { Global } from '@styled-icons/remix-line';

export const Actions = styled.td`
  height: ${ props => {
      if (props.list !== 'imagens') {
        return `12rem`;
      } else {
        return `15rem`;
      }
  }};
  align-items: center;
  display: flex;
  position: relative;
`;

export const IconEdit = styled(Edit)`
  color: var(--btn-login-bg);
  width: 4rem;
  margin: auto 0;
  position: absolute;
  cursor: pointer;
`;

export const IconTrash = styled(Trash)`
  color: red;
  position: absolute;
  width: 4rem;
  margin: auto 4.5rem;
  cursor: pointer;
`;

export const IconGallery = styled(Gallery)`
  position: absolute;
  width: 4rem;
  margin: auto 9rem;
  cursor: pointer;
  display: ${props => props.list === 'imoveis' ? 'block' : 'none'};
`;

export const IconGlobalUrl = styled(Global)`
  position: absolute;
  width: 4rem;
  margin: auto 9rem;
  cursor: pointer;
  display: ${ props => props.list === 'imobiliarias' ? 'block' : 'none' };
`;
