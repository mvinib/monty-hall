import { useState } from "react";
import Gift from "../components/ Gift";
import Port from "../components/Port";
import PortModel from "../model/port";

export default function Home() {
  const [p1, setP1] = useState(new PortModel(1, true, true))

  return (
    <div style={{display: 'flex'}}>
      <Port value={p1} onChange={newPort => setP1(newPort)}/>
    </div>
  )
}
