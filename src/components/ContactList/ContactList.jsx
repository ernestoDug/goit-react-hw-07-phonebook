// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './ContactList.module.css';

import { getContacts, getContactsFilter } from 'redux/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  // дай контакти
  const contacts = useSelector(getContacts);
  // дай фільтр
  const filterCon = useSelector(getContactsFilter);
  // відфільтрував
  const filtrat = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCon.toLowerCase())
    ),
  ];
  // console.log(filtrat);
  // console.log(contacts, 'contacts');
  return (
    <div className={css.miniWrapp}>
      <ul className={css.listCont}>
        <h3>Контакти</h3>
        {filterCon
          ? filtrat.map(({ id, name, number }) => (
              <ContactItem id={id} key={id} name={name} number={number} />
            ))
          : contacts.map(({ id, name, number }) => (
              <ContactItem id={id} key={id} name={name} number={number} />
            ))}
      </ul>
    </div>
  );
};
// протайпи
// ContactList.propTypes = {
//   number: PropTypes.number,
//   name: PropTypes.string,
//   id: PropTypes.string,
// };
export default ContactList;
