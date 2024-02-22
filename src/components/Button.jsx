/* eslint-disable react/prop-types */
import styles from './Button.module.css';

export const Button = ({imgRoute,typeBtn,handletClick}) => {
  const classname = typeBtn === 'copy' ? styles.btn__iconleft : '';
  const classbtn = styles.btn;
  return (
    <button className={`${classbtn} ${classname}`} onClick={handletClick}>
      <img src={imgRoute} alt="" />
    </button>
  )
}
