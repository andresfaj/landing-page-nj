import { Link } from "gatsby"
import React from "react"
import "../styles/index.scss"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Inscribete GRATIS al taller de Lectura!</h1>
      <p className="subtitle">
        <q>
          {" "}
          Que otros se enorgullezcan por lo que han escrito, yo me enorgullezco
          por lo que he leído{" "}
        </q>
      </p>
    </div>
  )
}

export default Home
