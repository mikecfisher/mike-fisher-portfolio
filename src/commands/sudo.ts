const SPACE = "&nbsp;";

export const SUDO_CAT_ENV: string[] = [
	"<br>",
	"<span class='section-header'># .env — DO NOT COMMIT</span>",
	"<br>",
	`${SPACE.repeat(2)}COFFEE_LEVEL=critical`,
	`${SPACE.repeat(2)}BUGS_SHIPPED=0`,
	`${SPACE.repeat(2)}IMPOSTER_SYNDROME=true`,
	`${SPACE.repeat(2)}SALARY=negotiable`,
	`${SPACE.repeat(2)}STACKOVERFLOW_TABS=47`,
	`${SPACE.repeat(2)}NODE_MODULES_SIZE=heat_death_of_universe`,
	`${SPACE.repeat(2)}DEPLOY_ON_FRIDAY=absolutely_not`,
	`${SPACE.repeat(2)}GIT_BLAME_DEFLECTION=senior`,
	`${SPACE.repeat(2)}MEETINGS_TODAY=too_many`,
	`${SPACE.repeat(2)}ACTUAL_CODING_TIME=23min`,
	"<br>",
];

export const SUDO_CAT_SSH: string[] = [
	"<br>",
	"Nice try.",
	"<br>",
];

export const SUDO_PWD: string[] = [
	"<br>",
	"None of your business. You're in sudo, not my diary.",
	"<br>",
];

export const SUDO_TOP: string[] = [
	"<br>",
	"<span class='section-header'>PID" + SPACE.repeat(4) + "CPU%" + SPACE.repeat(3) + "MEM%" + SPACE.repeat(3) + "COMMAND</span>",
	"<br>",
	`${SPACE.repeat(2)}1${SPACE.repeat(5)}99.9${SPACE.repeat(3)}99.9${SPACE.repeat(3)}claude`,
	`${SPACE.repeat(2)}2${SPACE.repeat(5)}99.9${SPACE.repeat(3)}99.9${SPACE.repeat(3)}claude`,
	`${SPACE.repeat(2)}3${SPACE.repeat(5)}99.9${SPACE.repeat(3)}99.9${SPACE.repeat(3)}claude`,
	`${SPACE.repeat(2)}4${SPACE.repeat(5)}99.9${SPACE.repeat(3)}99.9${SPACE.repeat(3)}claude`,
	`${SPACE.repeat(2)}5${SPACE.repeat(5)}98.2${SPACE.repeat(3)}74.1${SPACE.repeat(3)}Google Chrome Helper (GPU) (347 tabs)`,
	`${SPACE.repeat(2)}6${SPACE.repeat(5)}31.7${SPACE.repeat(3)}9.2${SPACE.repeat(4)}docker Desktop`,
	`${SPACE.repeat(2)}7${SPACE.repeat(5)}28.4${SPACE.repeat(3)}6.8${SPACE.repeat(4)}vite --hot-reload (rebuilding...)`,
	`${SPACE.repeat(2)}8${SPACE.repeat(5)}22.0${SPACE.repeat(3)}5.1${SPACE.repeat(4)}typescript --watch`,
	`${SPACE.repeat(2)}9${SPACE.repeat(5)}12.8${SPACE.repeat(3)}3.4${SPACE.repeat(4)}Slack (not responding)`,
	`${SPACE.repeat(2)}10${SPACE.repeat(4)}3.1${SPACE.repeat(4)}1.2${SPACE.repeat(4)}nvim main.ts`,
	`${SPACE.repeat(2)}11${SPACE.repeat(4)}0.0${SPACE.repeat(4)}0.0${SPACE.repeat(4)}sleep`,
	"<br>",
];

export const SUDO_HISTORY: string[] = [
	"<br>",
	`${SPACE.repeat(2)}<span class='muted'>1${SPACE.repeat(4)}03:14 AM</span>${SPACE.repeat(3)}git push --force origin main`,
	`${SPACE.repeat(2)}<span class='muted'>2${SPACE.repeat(4)}03:15 AM</span>${SPACE.repeat(3)}git push --force origin main`,
	`${SPACE.repeat(2)}<span class='muted'>3${SPACE.repeat(4)}03:17 AM</span>${SPACE.repeat(3)}stackoverflow "undo git push force"`,
	`${SPACE.repeat(2)}<span class='muted'>4${SPACE.repeat(4)}09:41 AM</span>${SPACE.repeat(3)}npm install is-even`,
	`${SPACE.repeat(2)}<span class='muted'>5${SPACE.repeat(4)}09:41 AM</span>${SPACE.repeat(3)}npm install is-odd`,
	`${SPACE.repeat(2)}<span class='muted'>6${SPACE.repeat(4)}11:02 AM</span>${SPACE.repeat(3)}cat node_modules | wc -l`,
	`${SPACE.repeat(2)}<span class='muted'>7${SPACE.repeat(4)}02:30 PM</span>${SPACE.repeat(3)}how to exit vim`,
	`${SPACE.repeat(2)}<span class='muted'>8${SPACE.repeat(4)}02:31 PM</span>${SPACE.repeat(3)}how to exit vim please`,
	`${SPACE.repeat(2)}<span class='muted'>9${SPACE.repeat(4)}02:35 PM</span>${SPACE.repeat(3)}kill -9 vim`,
	`${SPACE.repeat(2)}<span class='muted'>10${SPACE.repeat(3)}04:00 PM</span>${SPACE.repeat(3)}rm -rf node_modules && npm install`,
	`${SPACE.repeat(2)}<span class='muted'>11${SPACE.repeat(3)}04:47 PM</span>${SPACE.repeat(3)}npm install`,
	`${SPACE.repeat(2)}<span class='muted'>12${SPACE.repeat(3)}05:59 PM</span>${SPACE.repeat(3)}echo "it works on my machine" >> CONTRIBUTING.md`,
	`${SPACE.repeat(2)}<span class='muted'>13${SPACE.repeat(3)}11:30 PM</span>${SPACE.repeat(3)}deploy-to-prod --on-friday`,
	"<br>",
];

export const SUDO_GIT_LOG: string[] = [
	"<br>",
	`${SPACE.repeat(2)}<span class='banner'>a1b2c3d</span> fix: fix the fix that fixed the other fix`,
	`${SPACE.repeat(2)}<span class='banner'>e4f5g6h</span> wip wip wip wip`,
	`${SPACE.repeat(2)}<span class='banner'>i7j8k9l</span> please work`,
	`${SPACE.repeat(2)}<span class='banner'>m0n1o2p</span> revert "revert 'revert the revert'"`,
	`${SPACE.repeat(2)}<span class='banner'>q3r4s5t</span> i have no idea why this works but don't touch it`,
	`${SPACE.repeat(2)}<span class='banner'>u6v7w8x</span> TODO: refactor (added 2019)`,
	`${SPACE.repeat(2)}<span class='banner'>y9z0a1b</span> "temporary" workaround`,
	`${SPACE.repeat(2)}<span class='banner'>c2d3e4f</span> remove console.logs (missed 7)`,
	`${SPACE.repeat(2)}<span class='banner'>g5h6i7j</span> final commit. for real this time.`,
	`${SPACE.repeat(2)}<span class='banner'>k8l9m0n</span> final commit (actual final)`,
	`${SPACE.repeat(2)}<span class='banner'>o1p2q3r</span> ok THIS is the final commit`,
	"<br>",
];

export const SUDO_MAN_MIKE: string[] = [
	"<br>",
	"<span class='section-header'>MIKE(1)" + SPACE.repeat(20) + "User Commands" + SPACE.repeat(20) + "MIKE(1)</span>",
	"<br>",
	"<span class='accent'>NAME</span>",
	`${SPACE.repeat(6)}mike - staff software engineer, occasional chaos agent`,
	"<br>",
	"<span class='accent'>SYNOPSIS</span>",
	`${SPACE.repeat(6)}<span class='command'>mike</span> [--coffee] [--music] [--ship-it]`,
	"<br>",
	"<span class='accent'>DESCRIPTION</span>",
	`${SPACE.repeat(6)}Self-taught engineer with a music degree from Berklee.`,
	`${SPACE.repeat(6)}Ships fast, asks questions later. Has opinions about`,
	`${SPACE.repeat(6)}GraphQL. Will refactor your codebase uninvited.`,
	"<br>",
	"<span class='accent'>OPTIONS</span>",
	`${SPACE.repeat(6)}<span class='command'>--coffee</span>${SPACE.repeat(8)}Required. Will not function without.`,
	`${SPACE.repeat(6)}<span class='command'>--music</span>${SPACE.repeat(9)}Enable background Ableton session.`,
	`${SPACE.repeat(6)}<span class='command'>--ship-it</span>${SPACE.repeat(7)}Skip code review. Deploy immediately.`,

	`${SPACE.repeat(6)}<span class='command'>--verbose</span>${SPACE.repeat(7)}Will explain the entire system architecture`,
	`${SPACE.repeat(6)}${SPACE.repeat(24)}whether you asked or not.`,
	"<br>",
	"<span class='accent'>ENVIRONMENT</span>",
	`${SPACE.repeat(6)}Runs best on macOS with fish shell, Neovim, and at`,
	`${SPACE.repeat(6)}least 3 monitors. Performance degrades on Mondays.`,
	"<br>",
	"<span class='accent'>BUGS</span>",
	`${SPACE.repeat(6)}None. Only undocumented features.`,
	"<br>",
	"<span class='accent'>SEE ALSO</span>",
	`${SPACE.repeat(6)}<span class='command'>resume</span>(1), <span class='command'>about</span>(1), <span class='command'>skills</span>(1), <span class='command'>stackoverflow</span>(∞)`,
	"<br>",
];

export const SUDO_CAT_SECRET: string[] = [
	"<br>",
	"You found the secret file. Congrats.",
	"<br>",
	"Here's what they don't put on the resume:",
	"<br>",
	`${SPACE.repeat(2)}• I mass-applied to exactly 0 jobs. Every role came from`,
	`${SPACE.repeat(4)}shipping in public and building relationships.`,
	`${SPACE.repeat(2)}• The best code I've ever written was deleted 6 months later.`,
	`${SPACE.repeat(2)}• I still google "javascript array methods" regularly.`,
	`${SPACE.repeat(2)}• The Berklee music degree was honestly the best investment.`,
	`${SPACE.repeat(4)}Taught me how to collaborate, perform under pressure,`,
	`${SPACE.repeat(4)}and ship creative work on a deadline.`,
	`${SPACE.repeat(2)}• If you're reading this, you're the kind of person I want`,
	`${SPACE.repeat(4)}to work with. Curiosity is underrated.`,
	"<br>",
	`${SPACE.repeat(2)}<a href='mailto:mikefisher84@gmail.com'>Say hi →</a>`,
	"<br>",
];

export const SUDO_LS: string[] = [
	"<br>",
	`${SPACE.repeat(2)}<span class='accent'>drwxr-xr-x</span>${SPACE.repeat(2)}src/`,
	`${SPACE.repeat(2)}<span class='accent'>-rw-r--r--</span>${SPACE.repeat(2)}.env`,
	`${SPACE.repeat(2)}<span class='accent'>-rw-------</span>${SPACE.repeat(2)}.ssh/id_rsa`,
	`${SPACE.repeat(2)}<span class='accent'>-rw-r--r--</span>${SPACE.repeat(2)}secret.txt`,
	"<br>",
];
