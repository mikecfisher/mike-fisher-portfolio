import command from "../../config.json" with { type: "json" };

const createBanner = (): string[] => {
	const banner: string[] = [];
	banner.push("<br>");
	command.ascii.forEach((ele) => {
		let bannerString = "";
		for (let i = 0; i < ele.length; i++) {
			if (ele[i] === " ") {
				bannerString += "&nbsp;";
			} else {
				bannerString += ele[i];
			}
		}

		const eleToPush = `<pre>${bannerString}</pre>`;
		banner.push(eleToPush);
	});
	banner.push("<br>");
	banner.push("Staff Software Engineer • Brooklyn, NY • 13+ years");
	banner.push(
		"<a href='https://github.com/mikecfisher' target='_blank'>github</a> • <a href='https://linkedin.com/in/mikefisher-dev' target='_blank'>linkedin</a> • <a href='https://x.com/mikecfisher' target='_blank'>x/twitter</a> • <a href='https://mikecfisher.substack.com' target='_blank'>substack</a>",
	);
	banner.push("<br>");
	banner.push(
		"Type <span class='command'>'help'</span> for a list of all available commands.",
	);
	banner.push(
		`Type <span class='command'>'resume'</span> to view my resume or <span class='command'>'about'</span> to learn more.`,
	);
	banner.push("<br>");
	return banner;
};

export const BANNER = createBanner();
