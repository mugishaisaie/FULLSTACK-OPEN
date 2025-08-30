import React, { useEffect } from 'react'

function Notification({ notification, setNotification }) {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification, setNotification])

  if (!notification) return null

  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    margin: '10px',
  }

  return (
    <div>
      <p style={notificationStyle}>{notification}</p>
    </div>
  )
}

export default Notification