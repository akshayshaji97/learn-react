import React from 'react'

function User(props) {
  return (
    <div>
        <h2>
            Name: {props.name}
        </h2>
        <h3>
            Location: Kochi
        </h3>
        <h4>
            Email: akshay525@gmial.com
        </h4>
    </div>
  )
}

export default User