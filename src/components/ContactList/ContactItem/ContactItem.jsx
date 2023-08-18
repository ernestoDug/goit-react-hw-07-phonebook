import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ name, number, id, nu }) => {
  const dispatch = useDispatch();
  const deliter = id => {
    dispatch(deleteContact(id));
    // console.log(id);
  };

  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button className={css.listContDell} onClick={() => deliter(id)}>
        <span className={css.listContDellX}>🚮</span>
      </button>
    </li>
  );
};

// протайпи
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
