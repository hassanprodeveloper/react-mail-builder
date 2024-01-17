import React from "react"

import Components from "./styled"

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
		<Components.Main>
			<Components.Title>Import Design File</Components.Title>

			<Components.ChooseButton htmlFor="file">
				Select JSON
				<input
					id="file"
					type="file"
					onChange={handleFileChange}
					accept=".json"
					style={{ display: "none" }}
				/>
			</Components.ChooseButton>
		</Components.Main>
	)
}
export default ChooseJson
