import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

import { deleteContactsAct } from 'redux/slice/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deliter = id => {
    dispatch(deleteContactsAct(id));
    // console.log(id);
  };

  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button className={css.listContDell} onClick={() => deliter(id)}>
        <span className={css.listContDellX}>Х</span>
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
