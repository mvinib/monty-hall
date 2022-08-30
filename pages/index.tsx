import styles from '../styles/Form.module.css'
import Card from "../components/Card"
import Link from 'next/link'
import NumberInput from '../components/NumberInput'
import { useState } from 'react'

export default function Form() {
  const [qtdPorts, setQtdPorts] = useState(3)
  const [havingGift, setHavingGift] = useState(0)

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput value={qtdPorts} onChange={(newQtd) => {
            setQtdPorts(newQtd)
          }} text={"Quantidade de portas?"} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput value={havingGift} onChange={(newHavingGift) => {
            setHavingGift(newHavingGift)
          }} text={"Quantidade de portas?"} />
        </Card>
        <Card bgColor='#28a085'>
          <Link href={`/game/${qtdPorts}/${havingGift > 0 ? havingGift : ''}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
