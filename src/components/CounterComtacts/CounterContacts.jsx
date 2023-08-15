import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts } from 'redux/selectors';
import css from './CounterContacts.module.css';

const CounterContacts = () => {
  const contacts = useSelector(getContacts);

  return (
    <p className={css.counter}>
      Контактів в книзі: {contacts.length}{' '}
    </p>
  );
};

export default CounterContacts;
