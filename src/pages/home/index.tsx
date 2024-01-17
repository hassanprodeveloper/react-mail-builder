import React from "react"
import { useNavigate } from "react-router-dom"
import Component from "./styled"

const HomePage = () => {
	const navigate = useNavigate()

	const startBuildingOnClick = () => {
		navigate("/design")
	}
	const importDesignOnClick = () => {
		navigate("/design/edit")
	}

	return (
		<Component.Container>
			<Component.Title>React Mail Builder</Component.Title>

			<Component.Text>
				Experience the innovation of React Mail Builder: your open-source
				solution for easy drag-and-drop email template design, HTML export, JSON
				saving, and responsive previews in one intuitive platform.
			</Component.Text>

			<Component.Row>
				<Component.Button onClick={startBuildingOnClick}>
					Start Building
				</Component.Button>

				<Component.OutlineButton onClick={importDesignOnClick}>
					Import Design
				</Component.OutlineButton>
			</Component.Row>
			<Component.TextButton
				onClick={importDesignOnClick}
				style={{ marginTop: "16px" }}
			>
				Demo
			</Component.TextButton>
		</Component.Container>
	)
}

export default HomePage
