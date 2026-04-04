const SPACE = "&nbsp;";

const createNeofetch = (): string[] => {
	const n: string[] = [];

	const S3 = SPACE.repeat(3);
	const S4 = SPACE.repeat(4);
	const S15 = SPACE.repeat(15);
	const S25 = SPACE.repeat(25);

	// ASCII art left side + info right side
	const art = [
		"    ╭───────────────╮",
		`    │${S3}┌─┐${S3}┌─┐${S3}│`,
		`    │${S3}│▪│${S3}│▪│${S3}│`,
		`    │${S3}└─┘${S3}└─┘${S3}│`,
		`    │${S15}│`,
		`    │${S4}╰─────╯${S4}│`,
		`    │${S15}│`,
		"    ╰───────────────╯",
	];

	const info = [
		`<span class='neofetch-label'>mike</span>@<span class='neofetch-label'>mikefisher.dev</span>`,
		"─".repeat(26),
		`<span class='neofetch-label'>Name:</span>${SPACE.repeat(5)}<span class='neofetch-value'>Mike Fisher</span>`,
		`<span class='neofetch-label'>Role:</span>${SPACE.repeat(5)}<span class='neofetch-value'>Staff Software Engineer</span>`,
		`<span class='neofetch-label'>Location:</span>${SPACE} <span class='neofetch-value'>Brooklyn, NY</span>`,
		`<span class='neofetch-label'>Experience:</span> <span class='neofetch-value'>13+ years</span>`,
		`<span class='neofetch-label'>Education:</span>${SPACE}<span class='neofetch-value'>Berklee College of Music</span>`,
		`<span class='neofetch-label'>Shell:</span>${SPACE.repeat(4)}<span class='neofetch-value'>fish</span>`,
	];

	const info2 = [
		`<span class='neofetch-label'>Editor:</span>${SPACE.repeat(3)}<span class='neofetch-value'>Neovim + Claude Code</span>`,
		`<span class='neofetch-label'>OS:</span>${SPACE.repeat(7)}<span class='neofetch-value'>macOS</span>`,
		`<span class='neofetch-label'>Languages:</span>${SPACE}<span class='neofetch-value'>TS, JS, Python, Rust, Go</span>`,
		`<span class='neofetch-label'>Clients:</span>${SPACE.repeat(2)}<span class='neofetch-value'>Disney+, Walmart, Mastercard</span>`,
		`<span class='neofetch-label'>Scaling:</span>${SPACE.repeat(2)}<span class='neofetch-value'>150M+ users (Disney+)</span>`,
		`<span class='neofetch-label'>Side:</span>${SPACE.repeat(5)}<span class='neofetch-value'>Music producer & event ops</span>`,
		"",
		`<span style='color:#f38ba8'>●</span> <span style='color:#fab387'>●</span> <span style='color:#f9e2af'>●</span> <span style='color:#a6e3a1'>●</span> <span style='color:#89dceb'>●</span> <span style='color:#cba6f7'>●</span> <span style='color:#f5c2e7'>●</span> <span style='color:#b4befe'>●</span>`,
	];

	n.push("<br>");

	for (let i = 0; i < art.length; i++) {
		const infoLine = info[i] || "";
		n.push(`${art[i]}${S4}${infoLine}`);
	}

	n.push("");

	for (const line of info2) {
		n.push(`${S25}${line}`);
	}

	n.push("<br>");
	return n;
};

export const NEOFETCH = createNeofetch();
