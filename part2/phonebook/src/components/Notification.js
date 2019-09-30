import React from 'react'

const Notification = ({notification, errorMessage}) => {
  if (notification === null && errorMessage === null) {
    return null
  }
  
  if (notification) {
    return (
      <div className="notification">{notification}</div>
    )
  }
  
  if (errorMessage) {
    return (
      <div className="error">{errorMessage}</div>
    )
  }
}

export default Notification