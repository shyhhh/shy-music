import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import './assets/css/index.less'
import { Provider } from 'react-redux'
import store from './store'
import { App } from '@/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
