import Contact from 'components/Contact';

export default function ContactList({ filtered }) {
  return (
    <ul>
      {filtered.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
