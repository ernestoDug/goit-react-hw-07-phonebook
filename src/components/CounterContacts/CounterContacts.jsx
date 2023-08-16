import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors';
import css from './CounterContacts.module.css';

const CounterContacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <p className={css.counter}>
      Контактів в книзі: {contacts.length}{' '}
    </p>
  );
};

export default CounterContacts;
