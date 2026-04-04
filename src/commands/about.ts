import command from "../../config.json" with { type: "json" };

const createAbout = (): string[] => {
	const about: string[] = [];

	const SPACE = "&nbsp;";

	const EMAIL = "Email";
	const GITHUB = "Github";
	const LINKEDIN = "Linkedin";
	const TWITTER = "Twitter/X";
	const SUBSTACK = "Substack";

	const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
	const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
	const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
	const twitter = `<i class='fa-brands fa-x-twitter'></i> ${TWITTER}`;
	const substack = `<i class='fa-solid fa-pen-nib'></i> ${SUBSTACK}`;
	let string = "";

	about.push("<br>");
	about.push("<img src='/res/profile-pixel.jpg' class='profile-img' alt='Mike Fisher' />");
	about.push("<br>");
	about.push(command.aboutGreeting);
	about.push("<br>");
	about.push(
		"13+ years building across web, mobile, and backend.",
	);
	about.push(
		"Berklee-trained musician turned self-taught engineer. I ship fast and",
	);
	about.push("care about the product details.");
	about.push("<br>");
	about.push(
		"Previously: Staff Engineer at Pump.fun, Principal at my consultancy",
	);
	about.push(
		"GiantFish (Disney+, Good Eggs, Axios), and Senior Architect",
	);
	about.push("at Mastercard. Currently building Listium.");
	about.push("<br>");
	string += SPACE.repeat(2);
	string += email;
	string += SPACE.repeat(17 - EMAIL.length);
	string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
	about.push(string);

	string = "";
	string += SPACE.repeat(2);
	string += github;
	string += SPACE.repeat(17 - GITHUB.length);
	string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
	about.push(string);

	string = "";
	string += SPACE.repeat(2);
	string += linkedin;
	string += SPACE.repeat(17 - LINKEDIN.length);
	string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
	about.push(string);

	string = "";
	string += SPACE.repeat(2);
	string += twitter;
	string += SPACE.repeat(17 - TWITTER.length);
	string += `<a target='_blank' href='https://x.com/${command.social.twitter}'>x/${command.social.twitter}</a>`;
	about.push(string);

	string = "";
	string += SPACE.repeat(2);
	string += substack;
	string += SPACE.repeat(17 - SUBSTACK.length);
	string += `<a target='_blank' href='https://${command.social.substack}.substack.com'>${command.social.substack}.substack.com</a>`;
	about.push(string);

	about.push("<br>");
	return about;
};

export const ABOUT = createAbout();
