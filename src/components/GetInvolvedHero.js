import React from 'react'

export default function GetInvolvedHero() {
  return (
    <div className="get-involved-hero">
      <div
        className="get-involved-hero__image d-none d-md-block"
        style={{
          backgroundImage: `url(https://getdweb.net/wp-content/uploads/2020/11/Get-involved-hero.png)`,
        }}
      />
      <div
        className="get-involved-hero__image d-md-none"
        style={{
          backgroundImage: `url(https://getdweb.net/wp-content/uploads/2021/01/Get-involved-hero-mobile.jpg)`,
        }}
      />
      <div className="get-involved-hero__header">
        A web for all requires everyone to get involved
      </div>
    </div>
  )
}
