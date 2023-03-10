import React from 'react'

const Nav = () => {
    const signOut = () => {
        alert("User signed Out")
    }
  return (
    <nav className='navbar'>
        <h2>Forum</h2>
        <div className='navbarRight'>
            <button onClick={signOut}>Sign out </button>
        </div>
    </nav>
  )
}

export default Nav