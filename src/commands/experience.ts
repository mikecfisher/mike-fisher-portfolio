const SPACE = "&nbsp;";

const createExperience = (): string[] => {
	const e: string[] = [];

	e.push("<br>");
	e.push("<span class='section-header'>─── WORK HISTORY ───</span>");
	e.push("<br>");

	// Listium
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>Listium</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>11/2025 - Present</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-role'>Founder &amp; Engineer</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"Offline-first event operations platform for high-volume venues and festivals.",
	);
	e.push("");
	e.push(
		SPACE.repeat(4) +
			"• Solo-built production SaaS: TanStack Start + Expo + Bun + Convex",
	);
	e.push(
		SPACE.repeat(4) +
			"• AI-powered rider import with eval harness for output quality",
	);
	e.push(
		SPACE.repeat(4) + "• Offline-first sync layer with conflict resolution",
	);
	e.push(
		SPACE.repeat(4) +
			"• Sub-second local check-in with consistent shared state",
	);
	e.push("<br>");

	// Pump.fun
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>Pump.fun / Baton Corporation</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>02/2025 - 11/2025</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-role'>Staff Software Engineer</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"Solana token launchpad and DEX. $700M+ revenue in under 12 months.",
	);
	e.push(
		SPACE.repeat(2) +
			"Employee #40. No PMs — every engineer owned decisions end-to-end.",
	);
	e.push("");
	e.push(
		SPACE.repeat(4) +
			"• Real-time event platform: Fargate, ORPC, SQS, NATS, Postgres, Redis",
	);
	e.push(
		SPACE.repeat(4) +
			"• Thousands of trades/sec analyzed at 300K+ daily-wallet scale",
	);
	e.push(
		SPACE.repeat(4) +
			"• Push notification pipeline with feature flags, dedup, rate limiting",
	);
	e.push(
		SPACE.repeat(4) +
			"• Coinbase Pay on-ramp: +$500K/mo revenue, +22% first-day activation",
	);
	e.push(
		SPACE.repeat(4) +
			"• Auth + wallet flows (OAuth, non-custodial): -7% sign-up churn",
	);
	e.push("<br>");

	// GiantFish
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>GiantFish</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>01/2019 - 03/2025</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-role'>Founder &amp; Principal Engineer</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"Software consultancy. Embedded with 6+ startup engineering teams.",
	);
	e.push("<br>");

	// Disney+
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>Disney+</span> — <span class='experience-role'>Senior Full Stack Engineer</span>",
	);
	e.push(
		SPACE.repeat(4) +
			"• Built core Node.js API (Flex) powering all Disney+ apps for 150M+ users",
	);
	e.push(SPACE.repeat(4) + "• Shipped cancellation API used by 158M MAU");
	e.push(
		SPACE.repeat(4) +
			"• Rebuilt Baymax support tool in Next.js: -12% agent support time",
	);
	e.push("");

	// Ludex
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>Ludex</span> — <span class='experience-role'>Lead AI/Mobile Engineer</span>",
	);
	e.push(
		SPACE.repeat(4) +
			"• Rebuilt React Native app from scratch powering millions of AI scans",
	);
	e.push(
		SPACE.repeat(4) +
			"• TensorFlow Lite + Core ML + OpenCV: 99% real-time card recognition",
	);
	e.push(
		SPACE.repeat(4) +
			"• Cross-platform Expo Modules: -30% platform-specific bugs",
	);
	e.push("");

	// HEIR
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>HEIR</span> — <span class='experience-role'>Lead Full Stack Engineer</span>",
	);
	e.push(
		SPACE.repeat(4) +
			"• Web3 sports platform (Michael Jordan's family + Obama White House)",
	);
	e.push(
		SPACE.repeat(4) + "• Led 5 engineers: concept → App Store in 3 months",
	);
	e.push("");

	// Walmart
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>Walmart Labs</span> — <span class='experience-role'>Senior Full Stack Engineer</span>",
	);
	e.push(
		SPACE.repeat(4) +
			"• Built Buy Now single-click purchase for 100M+ monthly users",
	);
	e.push("");

	// Good Eggs
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>Good Eggs</span> — <span class='experience-role'>Senior Full Stack Engineer</span>",
	);
	e.push(SPACE.repeat(4) + "• Led mobile app + GraphQL platform rebuild");
	e.push(
		SPACE.repeat(4) +
			"• Founded internal GraphQL guild and became go-to arch reviewer",
	);
	e.push("");

	// Axios
	e.push(
		SPACE.repeat(4) +
			"<span class='accent'>Axios</span> — <span class='experience-role'>Senior Full Stack Engineer</span>",
	);
	e.push(
		SPACE.repeat(4) +
			"• Transformed axios.com into fastest news site on the internet",
	);
	e.push(
		SPACE.repeat(4) +
			"• Webby Award for performance and innovation. 50M+ readers.",
	);
	e.push("<br>");

	// Mastercard
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>Mastercard</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>08/2015 - 12/2019</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-role'>Senior Software Architect</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"Promoted 3 times. Built payment infrastructure at global scale.",
	);
	e.push("");
	e.push(
		SPACE.repeat(4) +
			"• EMVCo SRC standard (Click to Pay): 100M+ users, $2.5T volume",
	);
	e.push(
		SPACE.repeat(4) +
			"• In the room with Visa, Capital One for cross-network architecture",
	);
	e.push(
		SPACE.repeat(4) + "• Masterpass digital wallet: coordinated 14 scrum teams",
	);
	e.push(
		SPACE.repeat(4) + "• AngularJS → Vue.js migration: 40% faster page loads",
	);
	e.push("<br>");

	// Shutterstock
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>Shutterstock</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>2015</span>",
	);
	e.push(
		SPACE.repeat(2) +
			"<span class='experience-role'>Senior Full Stack Engineer</span>",
	);
	e.push(SPACE.repeat(4) + "• React in-browser image editor: 6M+ users");
	e.push("<br>");

	e.push(
		"Type <span class='command'>'resume'</span> for the condensed version or <span class='command'>'skills'</span> for tech stack.",
	);
	e.push("<br>");

	return e;
};

export const EXPERIENCE = createExperience();
