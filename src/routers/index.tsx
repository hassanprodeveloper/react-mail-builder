import React from "react"

import { Routes, Route } from "react-router-dom"

import Design from "src/pages/design"
import HomePage from "src/pages/home"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/design" element={<Design />} />
		</Routes>
	)
}

export default AppRoutes
