import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Hem</Link>
      </li>
      <li>
        <Link to="/about">Om</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  )
}
