import React from 'react'

const Nav = () => {
  const signOut = () => {
    localStorage.removeItem("_id");
    //👇🏻 redirects to the login page
    navigate("/");
};
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