// import PropTypes from 'prop-types';

const Contact = ({id, name, number}) => {
    return (
    <li id={id}>
        {name}: {number}
    </li>
    )
};

// Contact.propTypes = {
    
// }

export default Contact;