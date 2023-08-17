import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectContacts } from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';
import css from './CounterContacts.module.css';

const CounterContacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      <p className={css.counter}>Контактів в книзі: {contacts.length} </p>
      {loading === true && <p className="loading">🚧Завантажую 🚚...</p>}
    </>
  );
};

export default CounterContacts;
