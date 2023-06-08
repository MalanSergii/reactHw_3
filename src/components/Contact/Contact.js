export default function Contact({ contact }) {
  return (
    <li>
      <span>{contact.name}</span>: <span>{contact.number}</span>
    </li>
  );
}
