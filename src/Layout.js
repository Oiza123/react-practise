import React from 'react'
import{ Outlet,Link } from "react-router-dom"

function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/DataFetch">Fetch Data</Link>
        </li>
        <li>
          <Link to="/PostAPI">Form</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout