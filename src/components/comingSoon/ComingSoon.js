import React from 'react'

const ComingSoon = ({ page, ...rest }) => {
  return (
    <div style={{ width: 'max-content', margin: '2rem auto' }}>
      <h1 style={{ fontSize: '2rem', width: 'max-content' }}>
        {page}
      </h1>
      <p style={{ fontSize: '1rem', margin: 'auto', width: 'max-content' }}>Coming Soon :)</p>
    </div >
  )
}

export default ComingSoon
