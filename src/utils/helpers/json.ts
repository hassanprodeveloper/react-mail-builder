export const removeJsonExtension = (name: string) =>
	name.replaceAll(".json", "")
export function exportAndDownloadJson(
	data: any,
	filename = "exported_data"
): void {
	const name = removeJsonExtension(filename) + ".json"
	// Convert the data to JSON string
	const jsonData: string = JSON.stringify(data, null, 2) // The third parameter (2) is for indentation

	// Create a Blob object with the JSON data
	const blob: Blob = new Blob([jsonData], { type: "application/json" })

	// Create a link element
	const link: HTMLAnchorElement = document.createElement("a")

	// Set the download attribute with the desired name
	link.download = name

	// Create a URL for the Blob and set it as the href attribute of the link
	link.href = window.URL.createObjectURL(blob)

	// Append the link to the document
	document.body.appendChild(link)

	// Trigger a click on the link to start the download
	link.click()

	// Remove the link from the document
	document.body.removeChild(link)
}
