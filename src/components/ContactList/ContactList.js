import Contact from 'components/Contact';
import PropTypes from 'prop-types';

export default function ContactList({ filtered, onClickDeleteButton }) {
  return (
    <ul>
      {filtered.map(contact => (
        <Contact
          onClickDeleteButton={onClickDeleteButton}
          name={contact.name}
          id={contact.id}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onClickDeleteButton: PropTypes.func.isRequired,
  filtered: PropTypes.arrayOf(PropTypes.object),
};
