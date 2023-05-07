// import PropTypes from 'prop-types';

const Contact = ({id, name, number, deleter}) => {
    return (
    <li id={id}>
        <span>{name}: {number}</span>
        <button type="button" id={id} onClick={deleter}>Delete</button>
    </li>
    )
};

// Contact.propTypes = {
    
// }

export default Contact;