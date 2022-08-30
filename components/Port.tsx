import styles from '../styles/Port.module.css'
import PortModel from '../model/port'
import Gift from './ Gift';

interface PortProps {
  value: PortModel;
  onChange: (newPort: PortModel) => void;
}

export default function Port(props: PortProps) {
  const { value, onChange } = props
  const { selected, haveGift, number, open } = value
  const select = selected && !open ? styles.selected : ''

  return (
    <div className={styles.area} onClick={(e) => {
      onChange(value.handleSelected())
    }}>
      <div className={`${styles.frame} ${select}`}>
        {!open ?
          <div className={styles.port}>
            <div className={styles.number}>{number}</div>
            <div className={styles.eye}>
              <div className={styles.bullet}></div>
            </div>
            <div className={styles.doorHandle} onClick={(e) => {
              e.stopPropagation()
              onChange(value.opening())
            }}></div>
          </div> : haveGift ?
            <Gift /> : false
        }
      </div>
      <div className={styles.floor}></div>
    </div>

  )
}