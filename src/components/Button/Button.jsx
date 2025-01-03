/* eslint-disable react/prop-types */

import css from "./Button.module.css";
export default function Button({ children }) {
  return <button className={css.btn}>{children}</button>;
}
