import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import EditorHeader from "src/components/editor/header"
import ChooseJson from "src/components/editor/chooseJson"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`

const DesignEdit = () => {
	const [json, setJson] = React.useState<string | null>(null)
	const emailEditorRef = useRef<EditorRef | null>(null)

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
			<EditorHeader editorRef={emailEditorRef} />

			<EmailEditor ref={emailEditorRef} onLoad={onLoad} />
		</Container>
	)
}

export default DesignEdit
