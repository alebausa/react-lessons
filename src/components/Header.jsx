import React from 'react'

export default function Header(props) {
  const { name, drink, isPremium } = props.client;

  const thankYou4DaMoney = isPremium === true ? 'Thank you for giving us lots of money.' : 'Give us some money madafa***'
  return (
    <div>
      <h2>Some important information for you {name}</h2>
      <p>{thankYou4DaMoney}</p>
      <p>Favourite drink: {drink}</p>
    </div>
  )
}
