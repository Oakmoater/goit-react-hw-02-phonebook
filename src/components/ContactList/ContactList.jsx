// import PropTypes from 'prop-types';
import Contact from '../Contact/Contact'

const ContactList = ({ contacts, filter }) => {
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
    <ul className="contact-list">
        {filteredContacts.map((contact) => (
        <Contact
            id={contact.id}
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