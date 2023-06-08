export default function Contact({ contact, onClickDeleteButton }) {
  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
      <button
        id={contact.id}
        value={contact.name}
        onClick={() => onClickDeleteButton(contact.id)}
      >
        delete
      </button>
    </li>
  );
}
