// Just a tiny touch of interactivity so the page feels alive.
document.addEventListener("DOMContentLoaded", () => {
	const list = document.getElementById("student-list");

	if (list && list.children.length === 0) {
		const placeholder = document.createElement("li");
		placeholder.textContent =
			"No student pages yet — be the first to open a pull request!";
		placeholder.style.color = "#8b949e";
		placeholder.style.fontStyle = "italic";
		list.appendChild(placeholder);
	}

	console.log(
		"👋 If you can see this in the browser console, you found the script.js file!",
	);
});
