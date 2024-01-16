import "react-app-polyfill/ie11"
import * as React from "react"
import ReactDOM from "react-dom/client"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "src/pages/dashboard"
import AppRoutes from "src/routers"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #root {
    height: 100%;
  }
`

const App = () => {
	return (
		<Router>
			<GlobalStyle />

			<AppRoutes />
		</Router>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(<App />)
