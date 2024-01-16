import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`

const Bar = styled.div`
	flex: 1;
	background-color: #61dafb;
	color: #000;
	padding: 10px;
	display: flex;
	max-height: 40px;

	h1 {
		flex: 1;
		font-size: 16px;
		text-align: left;
	}

	button {
		flex: 1;
		padding: 10px;
		margin-left: 10px;
		font-size: 14px;
		font-weight: bold;
		background-color: #000;
		color: #fff;
		border: 0px;
		max-width: 150px;
		cursor: pointer;
	}

	a {
		flex: 1;
		padding: 10px;
		margin-left: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		border: 0px;
		cursor: pointer;
		text-align: right;
		text-decoration: none;
		line-height: 160%;
	}
`

const DesignEdit = () => {
	const [json, setJson] = React.useState<string | null>(null)
	const emailEditorRef = useRef<EditorRef | null>(null)

	const saveDesign = () => {
		const unlayer = emailEditorRef.current?.editor

		unlayer?.saveDesign((design) => {
			console.log("saveDesign", design)
			alert("Design JSON has been logged in your developer console.")
		})
	}

	const exportHtml = () => {
		const unlayer = emailEditorRef.current?.editor

		unlayer?.exportHtml((data) => {
			const { html } = data
			console.log("exportHtml", html)
			alert("Output HTML has been logged in your developer console.")
		})
	}

	const onDesignLoad = (data) => {
		console.log("onDesignLoad", data)
	}

	const onLoad: EmailEditorProps["onLoad"] = (unlayer) => {
		if (json) {

			const templateData = JSON.parse(json)
			console.log("onLoad", unlayer)
			unlayer.addEventListener("design:loaded", onDesignLoad)
			unlayer.loadDesign(templateData)
		} else {
			alert("Please choose a JSON file")
		}
	}

	if (!json) {
		return <ChooseJson onSelect={setJson} />
	}

	return (
		<Container>
			<Bar>
				<h1>React Email Editor (Demo)</h1>

				<Link to={`/`}>Dashboard</Link>
				<button onClick={saveDesign}>Save Design</button>
				<button onClick={exportHtml}>Export HTML</button>
			</Bar>

			<EmailEditor ref={emailEditorRef} onLoad={onLoad} />
		</Container>
	)
}

export default DesignEdit

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
			<Bar>
				<h1>Choose JSON</h1>
			</Bar>

			<div style={{ padding: "10px" }}>
				<input type="file" onChange={handleFileChange} accept=".json" />
			</div>
		</Container>
	)
}
