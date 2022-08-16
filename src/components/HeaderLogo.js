import React from 'react'
import { Link } from 'gatsby'

export default function HeaderLogo() {
  return (
    <Link
      to="/"
      className="navbar__logo"
      style={{
        backgroundImage: `url(https://getdweb.net/wp-content/uploads/2020/11/DWeb-logo-original.svg)`,
      }}
      alt=""
      title=""
     />
  )
}
