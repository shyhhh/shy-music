import { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { AppFooter } from './components/app-footer'
import { AppHeader } from './components/app-header'
import { routes } from './router'

export const App: React.FC = memo(() => {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback=''>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})
