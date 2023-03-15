import { useRoutes } from 'react-router-dom'
import { routes } from './router'

export function App() {
  return (
    <div className="App">
      { useRoutes(routes)}
    </div>
  )
}
