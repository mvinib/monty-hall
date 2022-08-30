import styles from '../styles/NumberInput.module.css'

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newNumber: any) => void;
}

export default function NumberInput(props: NumberInputProps) {
  const { text, value } = props
  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={() => props.onChange(value - 1)}>-</button>
        <button className={styles.btn} onClick={() => props.onChange(value + 1)}>+</button>
      </div>
    </div>
  )
}