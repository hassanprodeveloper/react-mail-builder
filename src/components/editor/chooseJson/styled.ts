import styled from "styled-components"

const Main = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 600;
`

const ChooseButton = styled.label`
	all: unset;
	font-size: 16px;
	padding: 16px;
	border-radius: 8px;
	background: #5b18ca;
	color: #fff;
	font-weight: 500;
	cursor: pointer;
	margin-top: 16px;
`

export default { Main, Title, ChooseButton }
