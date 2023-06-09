import styled from '@emotion/styled';

const Item = styled.li`
  position: relative;
  :nth-of-type(odd) {
    background-color: #d4d4d4;
  }
  padding: 10px;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
`;

const Name = styled.span`
  margin-right: 10px;
`;

export { Item, DeleteButton, Name };
