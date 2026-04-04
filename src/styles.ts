import command from "../config.json" with { type: "json" };

(() => {
	const root = document.documentElement;

	root.style.setProperty("--bg", command.colors.background);
	root.style.setProperty("--fg", command.colors.foreground);
	root.style.setProperty("--banner", command.colors.banner);
	root.style.setProperty("--border", command.colors.border.color);
	root.style.setProperty("--prompt-default", command.colors.prompt.default);
	root.style.setProperty("--prompt-user", command.colors.prompt.user);
	root.style.setProperty("--prompt-host", command.colors.prompt.host);
	root.style.setProperty("--prompt-input", command.colors.prompt.input);
	root.style.setProperty("--link-text", command.colors.link.text);
	root.style.setProperty(
		"--link-highlight-bg",
		command.colors.link.highlightColor,
	);
	root.style.setProperty(
		"--link-highlight-text",
		command.colors.link.highlightText,
	);
	root.style.setProperty("--command-text", command.colors.commands.textColor);
	root.style.setProperty("--keys", command.colors.banner);

	if (!command.colors.border.visible) {
		const style = document.createElement("style");
		document.head.appendChild(style);
		if (style.sheet) {
			style.sheet.insertRule("#bars {display: none}");
			style.sheet.insertRule("main {border: none}");
		}
	}
})();
