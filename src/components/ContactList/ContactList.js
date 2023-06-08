import Contact from 'components/Contact';

export default function ContactList({ filtered, onClickDeleteButton }) {
  return (
    <ul>
      {filtered.map(contact => (
        <Contact
          onClickDeleteButton={onClickDeleteButton}
          contact={contact}
          key={contact.id}
        />
      ))}
    </ul>
  );
}
