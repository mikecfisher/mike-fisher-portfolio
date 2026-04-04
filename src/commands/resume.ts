const SPACE = "&nbsp;";

const createResume = (): string[] => {
	const r: string[] = [];

	r.push("<br>");
	r.push(
		"<span class='section-header'>╔══════════════════════════════════════════════════════════════╗</span>",
	);
	r.push(
		"<span class='section-header'>║" +
			SPACE.repeat(20) +
			"MIKE FISHER" +
			SPACE.repeat(31) +
			"║</span>",
	);
	r.push(
		"<span class='section-header'>╚══════════════════════════════════════════════════════════════╝</span>",
	);
	r.push("<br>");

	r.push(
		SPACE.repeat(2) +
			"Brooklyn, NY" +
			SPACE.repeat(3) +
			"<a href='mailto:mikefisher84@gmail.com'>mikefisher84@gmail.com</a>",
	);
	r.push(
		SPACE.repeat(2) +
			"<a href='https://github.com/mikecfisher' target='_blank'>github/mikecfisher</a>" +
			SPACE.repeat(3) +
			"<a href='https://linkedin.com/in/mikefisher-dev' target='_blank'>linkedin/mikefisher-dev</a>",
	);
	r.push(
		SPACE.repeat(2) +
			"<a href='https://x.com/mikecfisher' target='_blank'>x/mikecfisher</a>" +
			SPACE.repeat(3) +
			"<a href='https://mikecfisher.substack.com' target='_blank'>mikecfisher.substack.com</a>",
	);
	r.push("<br>");

	// Summary
	r.push("<span class='section-header'>─── SUMMARY ───</span>");
	r.push("<br>");
	r.push(
		SPACE.repeat(2) +
			"Staff software engineer with 13+ years shipping production",
	);
	r.push(
		SPACE.repeat(2) +
			"systems across web, mobile, and backend. 6+ years embedding",
	);
	r.push(
		SPACE.repeat(2) +
			"with startup teams as a senior technical partner. Built and",
	);
	r.push(
		SPACE.repeat(2) + "scaled systems serving 150M+ users at Disney+, 100M+ at",
	);
	r.push(SPACE.repeat(2) + "Walmart, and real-time infra at pump.fun.");
	r.push("<br>");

	// Experience
	r.push("<span class='section-header'>─── EXPERIENCE ───</span>");
	r.push("<br>");

	const jobs = [
		{
			company: "Listium",
			role: "Founder & Engineer",
			date: "11/2025 - Present",
			bullets: [
				"Solo-built a production SaaS: TanStack Start, Expo, Bun, Convex",
				"Offline-first sync with conflict resolution, sub-second perf",
			],
		},
		{
			company: "Pump.fun (Baton Corp)",
			role: "Staff Software Engineer",
			date: "02/2025 - 11/2025",
			bullets: [
				"Real-time event platform: AWS Fargate, SQS, NATS, Redis",
				"Coinbase Pay on-ramp: +$500K/mo revenue, +22% activation",
				"Auth & wallet flows: reduced sign-up churn 7%",
			],
		},
		{
			company: "GiantFish",
			role: "Principal Engineer",
			date: "01/2019 - 03/2025",
			bullets: [
				"Consultancy embedding with 6+ client engineering teams",
				"Disney+ — core Node.js API powering 150M+ users",
				"Ludex — on-device AI card recognition, 99% accuracy",
				"HEIR — MVP concept to App Store in 3 months",
				"Walmart — Buy Now feature for 100M+ monthly users",
				"Axios — fastest news site on the internet, Webby Award",
			],
		},
		{
			company: "Mastercard",
			role: "Senior Software Architect",
			date: "08/2015 - 12/2019",
			bullets: [
				"EMVCo SRC standard (Click to Pay): 100M+ users, $2.5T vol",
				"Masterpass digital wallet: coordinated 14 scrum teams",
				"AngularJS → Vue.js migration: 40% faster page loads",
			],
		},
		{
			company: "Shutterstock",
			role: "Senior Full Stack Engineer",
			date: "",
			bullets: ["React in-browser image editor used by 6M+ users"],
		},
	];

	for (const job of jobs) {
		const dateStr = job.date
			? SPACE.repeat(2) + `<span class='experience-date'>${job.date}</span>`
			: "";
		r.push(
			SPACE.repeat(2) +
				`<span class='experience-company'>${job.company}</span>` +
				dateStr,
		);
		r.push(
			SPACE.repeat(2) + `<span class='experience-role'>${job.role}</span>`,
		);
		for (const b of job.bullets) {
			r.push(SPACE.repeat(4) + `• ${b}`);
		}
		r.push("");
	}

	// Education
	r.push("<span class='section-header'>─── EDUCATION ───</span>");
	r.push("<br>");
	r.push(
		SPACE.repeat(2) +
			"<span class='experience-company'>Berklee College of Music</span>" +
			SPACE.repeat(2) +
			"<span class='experience-date'>2004 - 2008</span>",
	);
	r.push(SPACE.repeat(2) + "Self-taught engineer. Music degree, not CS.");
	r.push("<br>");

	r.push(
		"Type <span class='command'>'skills'</span> for tech stack or <span class='command'>'experience'</span> for detailed work history.",
	);
	r.push("<br>");

	return r;
};

export const RESUME = createResume();
