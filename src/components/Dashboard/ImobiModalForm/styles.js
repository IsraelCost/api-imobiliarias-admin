import styled from "styled-components";

import { CloseOutline } from "@styled-icons/evaicons-outline/";
import { IconTrash } from "../ActionsListItem/styles";
import { AddCircle } from '@styled-icons/ionicons-outline/';

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
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => {
    if (!props.display) {
      return "none";
    } else {
      return "flex";
    }
  }};
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

  @media (max-width: 845px) {
    max-width: 85%;
  }

  @media (max-height: 660px) {
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
export const Form = styled.form`
  max-height: 48rem;
  height: auto;
  overflow-y: auto;
  width: 100%;
  color: #3f4254;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    width: 0.5rem;
    border-radius: 15px;
    background: var(--gray);
  }

  @media (max-height: 660px) {
    max-height: 40vh;
  }
`;

export const Field = styled.div`
  height: auto;
  margin-bottom: 0.3rem;
  position: relative;
  width: 100%;

  button {
    width: 3rem;
    position: absolute;
    bottom: 0.3rem;
    right: 1rem;
    cursor: pointer;
    background: none;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
`;

export const Input = styled.input`
  height: 4.1rem;
  border: 1px solid #cfd2da;
  display: block;
  width: 90%;
  margin-top: 0.8rem;
  border-radius: 7px;
  padding: 1.85rem 1.4rem;
`;

export const BtnAdd = styled(AddCircle)``;

export const ListImage = styled.div`
  margin-top: 3rem;
  overflow-y: auto;
  height: 30vh;

  h4 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    width: 0.8rem;
    border-radius: 15px;
    background: var(--gray);
  }
`;

export const ItemImage = styled.div`
  height: 8rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  background: #f3f6f9;

  img {
    height: auto;
    max-width: 25%;
  }
`;

export const BtnDelete = styled(IconTrash)`
  position: initial;
  margin: 0;
`;

export const ImageActions = styled.div`
  width: auto;
  height: 8rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
`;
