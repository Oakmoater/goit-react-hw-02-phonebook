// import PropTypes from 'prop-types';
import Contact from '../Contact/Contact'

const ContactList = ({ contacts }) => {
    return (
    <ul className="contact-list">
        {contacts.map((contact) => (
        <Contact
            id={contact.avatar}
            name={contact.name}
            number={contact.number}
        />
      ))}
    </ul>
    )
};

// ContactList.propTypes = {
    
// }

export default ContactList;