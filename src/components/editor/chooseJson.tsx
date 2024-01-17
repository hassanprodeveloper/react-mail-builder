import React, { useRef } from "react"
import styled from "styled-components"

interface ChooseJsonProps {
	onSelect: (json: string) => void
}
const ChooseJson = ({ onSelect }: ChooseJsonProps) => {
	const handleFileChange = (event: any) => {
		const file = event.target.files[0]

		if (file) {
			const reader = new FileReader()

			reader.onload = (e) => {
				try {
					console.log("CHOOSE JSON", e?.target?.result)
					if (typeof e?.target?.result === "string") onSelect(e.target.result)
				} catch (error) {
					console.error("Error parsing JSON:", error)
				}
			}

			reader.readAsText(file)
		}
	}

	return (
		<Container>
			<h1>Choose JSON</h1>

			<div style={{ padding: "10px" }}>
				<input type="file" onChange={handleFileChange} accept=".json" />
			</div>
		</Container>
	)
}
export default ChooseJson

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`
