import PropTypes from 'prop-types'

import styles from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.list}>
      {options.map((name) => {
        return (
          <li key={name} className={styles.item}>
            <button
              type="button"
              onClick={onLeaveFeedback}
              className={styles.btn}
            >
              {name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
