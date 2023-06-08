import styled from '@emotion/styled';

const Item = styled.li`
  /* :not(:last-child) {
    margin-bottom: 1px;
  } */
  position: relative;
  :nth-child(odd) {
    background-color: #d4d4d4;
  }
  padding: 3px;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  /* position: absolute;
  right: 0; */
`;

export { Item, DeleteButton };
