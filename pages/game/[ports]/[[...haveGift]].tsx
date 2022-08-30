import styles from '../../../styles/Game.module.css';
import { useEffect, useState } from "react";
import Port from "../../../components/Port";
import { createPorts, updatePorts } from "../../../functions/ports";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Game() {
  const [ports, setPorts] = useState([])
  const router = useRouter()

  useEffect(() => { 
    if (+router?.query?.haveGift && +router?.query?.haveGift[0] > +router?.query.ports) {
      router.push('/')
    }
    setPorts(createPorts(+router?.query.ports ?? 0, router?.query?.haveGift ? +router?.query?.haveGift[0] : null))
  }, [router?.query])
  
  return (
    <div className={styles.game}>
      <div className={styles.port}>
        {ports.map((port) => {
          return <Port key={port.number} value={port} onChange={(newPort) => setPorts(updatePorts(ports, newPort))}/>
        })}
      </div>
      <div className={styles.button}>
        <Link href={'/'} passHref>
          <button>
            Reiniciar jogo
          </button>
        </Link>
      </div>
    </div>
  )
}
