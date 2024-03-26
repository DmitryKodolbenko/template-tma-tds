/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import { App } from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <TonConnectUIProvider manifestUrl="https://gist.github.com/anovic123/0212525dbb166a0b88b5714010a87e57.txt">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </TonConnectUIProvider>
)
