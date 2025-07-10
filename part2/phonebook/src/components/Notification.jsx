import React from 'react'

function Notification({notification,setNotification}) {
  if(!notification) return null;

if(notification){
    setTimeout(()=>{
        setNotification(null)

    },5000)
}
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    margin: '10px',
}
  return (
    <div>
      <p style={notificationStyle}>{notification ? notification : null}</p>
    </div>
  )
}

export default Notification
