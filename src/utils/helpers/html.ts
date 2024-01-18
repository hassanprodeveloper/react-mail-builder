import { DEFAULT_TEMPLATE_NAME } from "src/constants"

export const removeHtmlExtension = (name: string) =>
	name.replaceAll(".html", "")

export function downloadHtml(
	htmlContent: string,
	filename = DEFAULT_TEMPLATE_NAME
): void {
	const name = removeHtmlExtension(filename) + ".html"
	const blob: Blob = new Blob([htmlContent], { type: "text/html" })

	const link: HTMLAnchorElement = document.createElement("a")
	link.href = window.URL.createObjectURL(blob)
	link.download = name

	document.body.appendChild(link)
	link.click()

	document.body.removeChild(link)
}
