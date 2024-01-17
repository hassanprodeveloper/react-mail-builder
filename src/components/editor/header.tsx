import React from "react"
import { EditorRef } from "react-email-editor"
import { Link } from "react-router-dom"
import styled from "styled-components"

type Props = {
	editorRef: React.MutableRefObject<EditorRef | null>
}

const EditorHeader: React.FC<Props> = ({ editorRef }) => {
	const [preview, setPreview] = React.useState(false)

	const saveDesign = () => {
		const unlayer = editorRef.current?.editor

		unlayer?.saveDesign((design) => {
			console.log("saveDesign", design)
			alert("Design JSON has been logged in your developer console.")
		})
	}

	const togglePreview = () => {
		const unlayer = editorRef.current?.editor

		if (preview) {
			unlayer?.hidePreview()
			setPreview(false)
		} else {
			unlayer?.showPreview("desktop")
			setPreview(true)
		}
	}

	const exportHtml = () => {
		const unlayer = editorRef.current?.editor

		unlayer?.exportHtml((data) => {
			const { html } = data
			console.log("exportHtml", html)
			alert("Output HTML has been logged in your developer console.")
		})
	}

	return (
		<Bar>
			<h1>React Mail Builder</h1>

			<button onClick={togglePreview}>
				{preview ? "Hide" : "Show"} Preview
			</button>
			<button onClick={saveDesign}>Save Design</button>
			<button onClick={exportHtml}>Export HTML</button>
		</Bar>
	)
}

export default EditorHeader

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
