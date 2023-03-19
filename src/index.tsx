import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import './assets/css/index.less'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store'
import theme from './assets/theme'
import { App } from '@/App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
