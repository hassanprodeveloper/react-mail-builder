import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import EditorHeader from "src/components/editor/header"
import ChooseJson from "src/components/editor/chooseJson"
import useQuery from "src/hooks/useQuery"

import sampleJson from "src/data/sample.json"
import { DEFAULT_TEMPLATE_NAME } from "src/constants"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
`

const DesignEdit = () => {
	const [json, setJson] = React.useState<string | null>(null)
	const [name, setName] = React.useState(DEFAULT_TEMPLATE_NAME)

	const emailEditorRef = useRef<EditorRef | null>(null)

	const query = useQuery()

	const edit = query.get("edit")
	const example = query.get("example")

	const onDesignLoad = (data) => {
		console.log("onDesignLoad", data)
	}

	const onLoad: EmailEditorProps["onLoad"] = (unlayer) => {
		const templateData: any = example ? sampleJson : json ? json : null

		if (templateData) {
			console.log("onLoad", unlayer)
			unlayer.addEventListener("design:loaded", onDesignLoad)
			unlayer.loadDesign(templateData)
		}
	}

	const onJsonSelect = (json: string) => {
		if (!json) return

		const parse = () => {
			try {
				const parsed = JSON.parse(json)
				if (parsed?.name && parsed?.template) {
					setName(parsed.name)
					return parsed.template
				} else {
					alert("Invalid Design File")
					return null
				}
			} catch (error) {
				alert("Invalid JSON")
				return null
			}
		}
		const jsonData = parse()
		setJson(jsonData)
	}

	if (!json && edit && !example) {
		return <ChooseJson onSelect={onJsonSelect} />
	}

	return (
		<Container>
			<EditorHeader editorRef={emailEditorRef} name={name} setName={setName} />

			<EmailEditor ref={emailEditorRef} onLoad={onLoad} />
		</Container>
	)
}

export default DesignEdit
