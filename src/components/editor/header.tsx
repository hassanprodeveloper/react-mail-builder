import React from "react"
import { EditorRef } from "react-email-editor"
import { Link } from "react-router-dom"
import { DEFAULT_TEMPLATE_NAME } from "src/constants"
import { exportAndDownloadJson } from "src/utils/helpers/json"
import styled from "styled-components"

type Props = {
	editorRef: React.MutableRefObject<EditorRef | null>
	name: string
	setName: (name: string) => void
}

const EditorHeader: React.FC<Props> = ({ editorRef, name, setName }) => {
	const [preview, setPreview] = React.useState(false)

	const onNameInputBlur = () => {
		if (!name) {
			setName(DEFAULT_TEMPLATE_NAME)
		}
	}

	const saveDesign = () => {
		const unlayer = editorRef.current?.editor

		unlayer?.saveDesign((template) => {
			exportAndDownloadJson({ template, name }, name)
			console.log("saveDesign", template)
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
			<LeftColumn>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					onBlur={onNameInputBlur}
				/>
			</LeftColumn>

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
	background-color: #f9f9f9;
	color: #000;
	padding: 10px;
	display: flex;
	max-height: 40px;
	border-bottom: 1px solid rgb(214, 217, 220);
	align-items: center;

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
		border-radius: 4px;
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

const LeftColumn = styled.div`
	flex: 1;
`

const Input = styled.input`
	all: unset;
	font-size: 22px;
	border-radius: 4px;
	padding: 8px;
	width: auto;
	max-width: 100%;
	box-sizing: border-box;

	&:focus {
		border: 1px solid;
	}
`
