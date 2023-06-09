import PropTypes from 'prop-types';
import { Item, DeleteButton, Name } from './Contact.styled';
export default function Contact({ onClickDeleteButton, name, id, number }) {
  return (
    <Item>
      <Name>{name}:</Name>
      <span>{number}</span>
      <DeleteButton
        id={id}
        value={name}
        onClick={() => onClickDeleteButton(id)}
      >
        delete
      </DeleteButton>
    </Item>
  );
}

Contact.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
