// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

import { selectContacts } from 'redux/selectors';
import { filtersReduser } from 'redux/slice/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContacts);

  // зняття та запис фільтрації
  const filterChanger = ({ currentTarget: { value } }) => {
    dispatch(filtersReduser(value));
    // console.log(value);
  };

  return (
    <div className={css.miniWrapp}>
      <h4>ЗНАЙдіть конТАКт за ім'ям</h4>
      <input
        name="filter"
        className={css.filter}
        type="text"
        onChange={filterChanger}
        placeholder="Введіть ім'я контакту"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
        value={filter}
      />
    </div>
  );
};

// проптайпи
// Filter.propTypes = {
//   filterProp: PropTypes.func.isRequired,
// };

export default Filter;
