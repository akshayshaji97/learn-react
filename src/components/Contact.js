import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    console.log("Inside use effect");
    return () => {
      console.log("use effect termination")
    }
  }, []);
  return (
    <div>
        <h1>Contact Us</h1>
        <h2>
            This is a contact page
        </h2>
    </div>
  )
}

export default Contact