import { Item, DeleteButton } from './Contact.styled';
export default function Contact({ contact, onClickDeleteButton }) {
  return (
    <Item>
      <span>{contact.name} :</span> <span>{contact.number}</span>
      <DeleteButton
        id={contact.id}
        value={contact.name}
        onClick={() => onClickDeleteButton(contact.id)}
      >
        delete
      </DeleteButton>
    </Item>
  );
}
