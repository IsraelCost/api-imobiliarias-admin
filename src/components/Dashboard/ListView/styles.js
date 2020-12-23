import styled from "styled-components";

import { ArrowBack } from "@styled-icons/boxicons-regular/";

export const PageListView = styled.div`
  height: auto;
  width: 100vw;
  max-width: 100%;
`;

export const Container = styled.div`
  width: 75%;
  margin: auto;
  padding-top: 4rem;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
`;

export const List = styled.table`
  width: 100%;
  display: ${(props) => {
    if (props.display) {
      return "block";
    } else {
      return "none";
    }
  }};
  max-height: calc(65.5vh - 7rem);

  tbody {
    width: 100%;
    max-height: calc(65.5vh - 7rem);
    overflow-y: auto;
    display: block;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      width: 0.8rem;
      border-radius: 15px;
      background: var(--gray);
    }

    @media (max-width: 1207px) {
      overflow-x: auto;

      ::-webkit-scrollbar {
        height: 0.8rem;
      }

      ::-webkit-scrollbar-thumb {
        height: 0.8rem;
        border-radius: 15px;
        background: var(--gray);
      }
    }
  }
`;

export const TabList = styled.tr`
  width: 105rem;
  height: 4rem;
  border-bottom: 1px solid var(--white);
  color: var(--gray);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;

  td, td span {
    width: ${(props) => {
      if (props.list === "imobiliarias") {
        return `calc(105rem / 5)`;
      } else if (props.list === "imoveis") {
        return `calc(105rem / 5)`;
      } else if (props.list === "imagens") {
        return `calc(105rem / 3)`;
      }
    }};
    };
  }

  @media(max-width: 1207px) {
    td span {
      display: block;
    }
  }
`;

export const ListItem = styled(TabList)`
  height: 12rem;
  color: #000;
  text-transform: none;
  font-size: 1.4rem;
  font-weight: 400;

  td img {
    width: 100%;
    max-height: 12rem;
    max-height: ${(props) => {
      if (props.list === "imagens") {
        return `20rem`;
      }
    }};
  }

  td:first-child {
    background: ${(props) => {
      if (props.list === "imobiliarias") {
        return `#28a745`;
      } else {
        return "none";
      }
    }};
    border-radius: 8px;
    height: 12rem;
    width: 90%;
    height: ${(props) => {
      if (props.list === "imagens") {
        return `15rem`;
      }
    }};
    display: flex;
    justify-content: center;

    @media (max-width: 1207px) {
      td span {
        display: block;
      }
    }
  }
`;

export const BtnAdd = styled.button`
  padding: 1.2rem 1.8rem;
  max-width: 20rem;
  align-self: center;
  background: #28a745;
  border-radius: 10px;
  color: var(--white);
  cursor: pointer;
  transition: background 0.15s ease;
  font-weight: 600;
  margin-top: 5rem;

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

export const ArrowToBack = styled(ArrowBack)`
  position: absolute;
  width: 2.5rem;
  color: var(--gray);
  top: -2.6rem;
  left: -4rem;
  cursor: pointer;
`;
