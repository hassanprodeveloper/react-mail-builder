import React, { Fragment } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import DesignEdit from "src/pages/design/edit"
import DesignAdd from "src/pages/design/new"
import Example from "src/pages/example"
import HomePage from "src/pages/home"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/example" element={<Example />} />
			{/* <Route path="/dashboard" element={<Dashboard />} /> */}
			<Route path="/design" element={<DesignAdd />} />
			<Route path="/design/:designId" element={<DesignEdit />} />
		</Routes>
	)
}

export default AppRoutes
