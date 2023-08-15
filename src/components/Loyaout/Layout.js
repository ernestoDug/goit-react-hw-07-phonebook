import css from '../Loyaout/Loyaout.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
