import React from 'react'
import { Link } from 'gatsby'

export default function HeaderLogo() {
  return (
    <Link
      to="/"
      className="navbar__logo"
      style={{
        backgroundImage: `url(/images/DWeb-logo-original.svg)`,
      }}
      alt=""
      title=""
    />
  )
}
