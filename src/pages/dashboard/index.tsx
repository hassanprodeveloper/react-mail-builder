import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
	return (
		<div>
			<h1>My Designs</h1>

			<p>
				<Link to={`/example`}>Example</Link>
			</p>

			<p>
				<Link to={`/design`}>New Design</Link>
			</p>

			<p>
				<Link to={`/design/edit`}>Edit Design</Link>
			</p>
		</div>
	)
}

export default Dashboard

// const Dashboard = () => {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<Dashboard />} />
// 			<Route path={`/design/new`} element={<DesignEdit />} />
// 			<Route path={`/design/edit/:designId`} element={<DesignEdit />} />
// 		</Routes>
// 	)
// }
