import styled from 'styled-components';

export const Item = styled.div`
  width: calc(100% / 3);
  border-bottom: .5px solid #f3f6f9;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--gray);
  font-weight: 600;
  transition: background .15s ease;
  border-right: .5px solid #f3f6f9;
  background: ${props => {
    if (props.isActive) {
      return '#f3f6f9'
    }
  }};

  &:hover {
    background: #f3f6f9;
  }

  &:last-child {
    border-right: none;
  }
`;
