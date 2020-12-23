import styled from 'styled-components';

const NavItem = styled.li`
  width: 9.7rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 1rem;
  transition: background .15s ease;
  background: ${(props => {
    if (props.isActive) {
      return '#f3f6f9';
    }
  })};

  &:hover {
    background-color: #f3f6f9;
  }

  a {
    color: var(--gray);
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default NavItem;
