/* eslint-disable react/prop-types */
import styles from './Tags.module.css';
export const Tags = ({tagName}) => {
  return (
    <span className={styles.tag}>{tagName}</span>
  )
}
