import styled from "styled-components"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`
const Title = styled.h1`
	font-size: 76px;
	text-align: center;
	margin: 0px;
`
const Text = styled.p`
	font-size: 18px;
	max-width: 750px;
	text-align: center;
`
const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	margin-top: 16px;
`
const Button = styled.button`
	all: unset;
	font-size: 16px;
	padding: 16px;
	border-radius: 8px;
	background: #5b18ca;
	color: #fff;
	font-weight: 600;
	cursor: pointer;
`
const OutlineButton = styled.button`
	all: unset;
	font-size: 16px;
	font-weight: 600;
	padding: 16px;
	border-radius: 8px;
	background: #ffffff;
	color: #5b18ca;
	border: 1px solid #5b18ca;
	cursor: pointer;
`
const TextButton = styled.button`
	all: unset;
	font-size: 16px;
	padding: 16px;
	border-radius: 8px;
	background: #ffffff;
	color: #5b18ca;
	cursor: pointer;
`

export default {
	Container,
	Title,
	Text,
	Row,
	Button,
	OutlineButton,
	TextButton,
}
