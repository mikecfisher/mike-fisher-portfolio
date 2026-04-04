const SPACE = "&nbsp;";

function bar(level: number, max: number = 10): string {
	const filled = "█".repeat(level);
	const empty = "░".repeat(max - level);
	return `<span class='bar-filled'>${filled}</span><span class='bar-empty'>${empty}</span>`;
}

const createSkills = (): string[] => {
	const s: string[] = [];

	s.push("<br>");
	s.push("<span class='section-header'>─── LANGUAGES ───</span>");
	s.push("<br>");
	s.push(SPACE.repeat(2) + `TypeScript${SPACE.repeat(6)}${bar(10)} expert`);
	s.push(SPACE.repeat(2) + `JavaScript${SPACE.repeat(6)}${bar(10)} expert`);
	s.push(
		SPACE.repeat(2) + `Python${SPACE.repeat(10)}${bar(7)}${SPACE} proficient`,
	);
	s.push(SPACE.repeat(2) + `Rust${SPACE.repeat(12)}${bar(5)}${SPACE} building`);
	s.push(SPACE.repeat(2) + `Go${SPACE.repeat(14)}${bar(5)}${SPACE} building`);
	s.push("<br>");

	s.push("<span class='section-header'>─── FRONTEND ───</span>");
	s.push("<br>");
	s.push(SPACE.repeat(2) + `React / RN${SPACE.repeat(5)}${bar(10)} expert`);
	s.push(
		SPACE.repeat(2) + `Next.js${SPACE.repeat(9)}${bar(9)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `Svelte/Kit${SPACE.repeat(6)}${bar(8)}${SPACE} advanced`,
	);
	s.push(SPACE.repeat(2) + `Expo${SPACE.repeat(12)}${bar(9)}${SPACE} advanced`);
	s.push(
		SPACE.repeat(2) + `TanStack${SPACE.repeat(8)}${bar(8)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `Tailwind${SPACE.repeat(8)}${bar(9)}${SPACE} advanced`,
	);
	s.push("<br>");

	s.push("<span class='section-header'>─── BACKEND ───</span>");
	s.push("<br>");
	s.push(SPACE.repeat(2) + `Node.js${SPACE.repeat(9)}${bar(10)} expert`);
	s.push(
		SPACE.repeat(2) + `GraphQL${SPACE.repeat(9)}${bar(9)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `PostgreSQL${SPACE.repeat(6)}${bar(8)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `Redis${SPACE.repeat(11)}${bar(8)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `Convex${SPACE.repeat(10)}${bar(8)}${SPACE} advanced`,
	);
	s.push(SPACE.repeat(2) + `Bun${SPACE.repeat(13)}${bar(8)}${SPACE} advanced`);
	s.push("<br>");

	s.push("<span class='section-header'>─── AI / ML ───</span>");
	s.push("<br>");
	s.push(
		SPACE.repeat(2) + `Agentic AI${SPACE.repeat(6)}${bar(9)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) +
			`Claude / MCP${SPACE.repeat(4)}${bar(9)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `LangChain${SPACE.repeat(7)}${bar(7)}${SPACE} proficient`,
	);
	s.push(
		SPACE.repeat(2) +
			`TensorFlow${SPACE.repeat(6)}${bar(7)}${SPACE} proficient`,
	);
	s.push(
		SPACE.repeat(2) + `OpenCV${SPACE.repeat(10)}${bar(6)}${SPACE} proficient`,
	);
	s.push("<br>");

	s.push("<span class='section-header'>─── CLOUD / INFRA ───</span>");
	s.push("<br>");
	s.push(SPACE.repeat(2) + `AWS${SPACE.repeat(13)}${bar(9)}${SPACE} advanced`);
	s.push(
		SPACE.repeat(2) + `Vercel${SPACE.repeat(10)}${bar(9)}${SPACE} advanced`,
	);
	s.push(
		SPACE.repeat(2) + `Docker${SPACE.repeat(10)}${bar(7)}${SPACE} proficient`,
	);
	s.push(
		SPACE.repeat(2) +
			`Kafka / NATS${SPACE.repeat(4)}${bar(7)}${SPACE} proficient`,
	);
	s.push("<br>");

	return s;
};

export const SKILLS = createSkills();
