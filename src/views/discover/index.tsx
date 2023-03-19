import { Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

const Discover: React.FC = memo(() => {
  return (
    <>
      <NavBar/>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </>
  )
})

export default Discover
