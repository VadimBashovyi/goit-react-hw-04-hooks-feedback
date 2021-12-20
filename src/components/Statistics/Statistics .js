import PropTypes from 'prop-types'
import React from 'react'

import styles from './Statistics.module.css'

export default function Statistics({ arrFeedback, total, positivePercentage }) {
  return (
    <>
      <ul>
        {Object.keys(arrFeedback).map((elem) => (
          <li key={elem} className={styles.itemStatics}>
            <p className={styles.textItemStatics}>{elem}:</p>
            <span>{arrFeedback[elem]}</span>
          </li>
        ))}
      </ul>
      <ul>
        <li className={styles.itemStatics}>
          <p className={styles.textItemStatics}>Total:</p>
          <span>{total}</span>
        </li>
        <li className={styles.itemStatics}>
          <p className={styles.textItemStatics}>Positive feedback:</p>
          <span>{positivePercentage}</span>
        </li>
      </ul>
    </>
  )
}

Statistics.propTypes = {
  arrFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}
