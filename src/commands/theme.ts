interface Theme {
	name: string;
	bg: string;
	fg: string;
	banner: string;
	border: string;
	promptDefault: string;
	promptUser: string;
	promptHost: string;
	promptInput: string;
	linkText: string;
	linkHighlightBg: string;
	linkHighlightText: string;
	commandText: string;
}

const themes: Record<string, Theme> = {
	catppuccin: {
		name: "Catppuccin Mocha",
		bg: "#1e1e2e",
		fg: "#cdd6f4",
		banner: "#fab387",
		border: "#f5c2e7",
		promptDefault: "#a6adc8",
		promptUser: "#f5c2e7",
		promptHost: "#89dceb",
		promptInput: "#f38ba8",
		linkText: "#b4befe",
		linkHighlightBg: "#cba6f7",
		linkHighlightText: "#1e1e2e",
		commandText: "#f5c2e7",
	},
	dracula: {
		name: "Dracula",
		bg: "#282a36",
		fg: "#f8f8f2",
		banner: "#ffb86c",
		border: "#ff79c6",
		promptDefault: "#6272a4",
		promptUser: "#ff79c6",
		promptHost: "#8be9fd",
		promptInput: "#50fa7b",
		linkText: "#bd93f9",
		linkHighlightBg: "#ff79c6",
		linkHighlightText: "#282a36",
		commandText: "#ff79c6",
	},
	nord: {
		name: "Nord",
		bg: "#2e3440",
		fg: "#eceff4",
		banner: "#d08770",
		border: "#88c0d0",
		promptDefault: "#4c566a",
		promptUser: "#b48ead",
		promptHost: "#88c0d0",
		promptInput: "#a3be8c",
		linkText: "#81a1c1",
		linkHighlightBg: "#5e81ac",
		linkHighlightText: "#eceff4",
		commandText: "#b48ead",
	},
	gruvbox: {
		name: "Gruvbox Dark",
		bg: "#282828",
		fg: "#ebdbb2",
		banner: "#fe8019",
		border: "#d3869b",
		promptDefault: "#928374",
		promptUser: "#d3869b",
		promptHost: "#83a598",
		promptInput: "#b8bb26",
		linkText: "#83a598",
		linkHighlightBg: "#d3869b",
		linkHighlightText: "#282828",
		commandText: "#d3869b",
	},
	matrix: {
		name: "Matrix",
		bg: "#0d0208",
		fg: "#00ff41",
		banner: "#008f11",
		border: "#003b00",
		promptDefault: "#005500",
		promptUser: "#00ff41",
		promptHost: "#00ff41",
		promptInput: "#00ff41",
		linkText: "#008f11",
		linkHighlightBg: "#00ff41",
		linkHighlightText: "#0d0208",
		commandText: "#00ff41",
	},
	solarized: {
		name: "Solarized Dark",
		bg: "#002b36",
		fg: "#839496",
		banner: "#cb4b16",
		border: "#586e75",
		promptDefault: "#586e75",
		promptUser: "#d33682",
		promptHost: "#2aa198",
		promptInput: "#859900",
		linkText: "#268bd2",
		linkHighlightBg: "#d33682",
		linkHighlightText: "#002b36",
		commandText: "#d33682",
	},
	tokyo: {
		name: "Tokyo Night",
		bg: "#1a1b26",
		fg: "#c0caf5",
		banner: "#ff9e64",
		border: "#bb9af7",
		promptDefault: "#565f89",
		promptUser: "#bb9af7",
		promptHost: "#7dcfff",
		promptInput: "#f7768e",
		linkText: "#7aa2f7",
		linkHighlightBg: "#bb9af7",
		linkHighlightText: "#1a1b26",
		commandText: "#bb9af7",
	},
};

let currentTheme = "catppuccin";

export function applyTheme(themeName: string): boolean {
	const theme = themes[themeName];
	if (!theme) return false;

	const root = document.documentElement;
	root.style.setProperty("--bg", theme.bg);
	root.style.setProperty("--fg", theme.fg);
	root.style.setProperty("--banner", theme.banner);
	root.style.setProperty("--border", theme.border);
	root.style.setProperty("--prompt-default", theme.promptDefault);
	root.style.setProperty("--prompt-user", theme.promptUser);
	root.style.setProperty("--prompt-host", theme.promptHost);
	root.style.setProperty("--prompt-input", theme.promptInput);
	root.style.setProperty("--link-text", theme.linkText);
	root.style.setProperty("--link-highlight-bg", theme.linkHighlightBg);
	root.style.setProperty("--link-highlight-text", theme.linkHighlightText);
	root.style.setProperty("--command-text", theme.commandText);
	root.style.setProperty("--keys", theme.banner);

	currentTheme = themeName;
	return true;
}

export function createThemeList(): string[] {
	const lines: string[] = [];
	const SPACE = "&nbsp;";

	lines.push("<br>");
	lines.push("<span class='section-header'>Available Themes</span>");
	lines.push("<br>");

	for (const [key, theme] of Object.entries(themes)) {
		const marker =
			key === currentTheme ? " <span class='theme-active'>●</span>" : "  ";
		const name = `<span class='theme-name'>${theme.name}</span>`;
		lines.push(
			`${SPACE.repeat(2)}${marker} ${name}${SPACE.repeat(Math.max(1, 22 - theme.name.length))}theme ${key}`,
		);
	}

	lines.push("<br>");
	lines.push(`Usage: <span class='command'>'theme &lt;name&gt;'</span>`);
	lines.push("<br>");
	return lines;
}

export function createThemeApplied(themeName: string): string[] {
	const theme = themes[themeName];
	if (!theme) {
		return [
			"<br>",
			`Theme '${themeName}' not found.`,
			`Type <span class='command'>'theme'</span> to see available themes.`,
			"<br>",
		];
	}
	return [
		"<br>",
		`Switched to <span class='theme-name'>${theme.name}</span>.`,
		"<br>",
	];
}

export const THEME_NAMES = Object.keys(themes);
