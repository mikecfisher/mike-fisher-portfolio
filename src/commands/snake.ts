type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

interface Position {
	x: number;
	y: number;
}

export interface SnakeCallbacks {
	onExit: (score: number) => void;
}

const COLS = 30;
const ROWS = 15;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 3;
const MIN_SPEED = 60;

const OPPOSITES: Record<Direction, Direction> = {
	UP: "DOWN",
	DOWN: "UP",
	LEFT: "RIGHT",
	RIGHT: "LEFT",
};

export function startSnake(
	_terminal: HTMLElement,
	writeLines: HTMLElement,
	callbacks: SnakeCallbacks,
): void {
	let snake: Position[] = [
		{ x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
		{ x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
		{ x: Math.floor(COLS / 2) - 2, y: Math.floor(ROWS / 2) },
	];
	let food: Position = { x: 0, y: 0 };
	let direction: Direction = "RIGHT";
	let nextDirection: Direction = "RIGHT";
	let score = 0;
	let speed = INITIAL_SPEED;
	let gameLoopTimeout: number | null = null;
	let isRunning = true;
	let touchStartX = 0;
	let touchStartY = 0;

	const isTouchDevice = "ontouchstart" in window;

	// Create DOM elements
	const scoreDisplay = document.createElement("div");
	scoreDisplay.className = "snake-score";

	const gameContainer = document.createElement("div");
	gameContainer.className = "snake-board";

	writeLines.parentNode!.insertBefore(scoreDisplay, writeLines);
	writeLines.parentNode!.insertBefore(gameContainer, writeLines);

	function posKey(x: number, y: number): string {
		return `${x},${y}`;
	}

	function spawnFood(): void {
		const occupied = new Set(snake.map((p) => posKey(p.x, p.y)));
		let pos: Position;
		do {
			pos = {
				x: Math.floor(Math.random() * COLS),
				y: Math.floor(Math.random() * ROWS),
			};
		} while (occupied.has(posKey(pos.x, pos.y)));
		food = pos;
	}

	function render(): void {
		const occupied = new Set(snake.map((p) => posKey(p.x, p.y)));
		const headKey = posKey(snake[0].x, snake[0].y);
		const foodKey = posKey(food.x, food.y);
		const lines: string[] = [];

		lines.push(`╔${"══".repeat(COLS)}╗`);

		for (let y = 0; y < ROWS; y++) {
			let row = "║";
			for (let x = 0; x < COLS; x++) {
				const key = posKey(x, y);
				if (key === headKey) {
					row += "██";
				} else if (occupied.has(key)) {
					row += "▓▓";
				} else if (key === foodKey) {
					row += "<span class='snake-food'>●●</span>";
				} else {
					row += "  ";
				}
			}
			row += "║";
			lines.push(row);
		}

		lines.push(`╚${"══".repeat(COLS)}╝`);

		gameContainer.innerHTML = lines.join("\n");

		const controlsHint = isTouchDevice
			? "Swipe to move"
			: "← ↑ ↓ → to move";
		scoreDisplay.textContent = `Score: ${score}  |  ${controlsHint}  |  q/Esc to quit`;
	}

	function applyNextDirection(): void {
		if (nextDirection !== OPPOSITES[direction]) {
			direction = nextDirection;
		}
	}

	function tick(): void {
		if (!isRunning) return;

		applyNextDirection();

		const head = { ...snake[0] };
		switch (direction) {
			case "UP":
				head.y--;
				break;
			case "DOWN":
				head.y++;
				break;
			case "LEFT":
				head.x--;
				break;
			case "RIGHT":
				head.x++;
				break;
		}

		// Wall collision
		if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
			gameOver();
			return;
		}

		// Self collision
		const occupied = new Set(snake.map((p) => posKey(p.x, p.y)));
		if (occupied.has(posKey(head.x, head.y))) {
			gameOver();
			return;
		}

		snake.unshift(head);

		// Food collision
		if (head.x === food.x && head.y === food.y) {
			score += 10;
			speed = Math.max(MIN_SPEED, speed - SPEED_INCREMENT);
			spawnFood();
		} else {
			snake.pop();
		}

		render();
		gameLoopTimeout = window.setTimeout(tick, speed);
	}

	function cleanup(): void {
		isRunning = false;
		if (gameLoopTimeout !== null) {
			clearTimeout(gameLoopTimeout);
			gameLoopTimeout = null;
		}
		document.removeEventListener("keydown", handleKeyDown);
		gameContainer.removeEventListener("touchstart", handleTouchStart);
		gameContainer.removeEventListener("touchend", handleTouchEnd);
		gameContainer.remove();
		scoreDisplay.remove();
	}

	function gameOver(): void {
		isRunning = false;
		if (gameLoopTimeout !== null) {
			clearTimeout(gameLoopTimeout);
		}

		scoreDisplay.textContent = `Game Over!  Score: ${score}  |  Press any key...`;

		document.removeEventListener("keydown", handleKeyDown);

		function exitOnKey(e: KeyboardEvent): void {
			e.preventDefault();
			document.removeEventListener("keydown", exitOnKey);
			cleanup();
			callbacks.onExit(score);
		}

		document.addEventListener("keydown", exitOnKey);
	}

	function handleKeyDown(e: KeyboardEvent): void {
		switch (e.key) {
			case "ArrowUp":
				e.preventDefault();
				nextDirection = "UP";
				break;
			case "ArrowDown":
				e.preventDefault();
				nextDirection = "DOWN";
				break;
			case "ArrowLeft":
				e.preventDefault();
				nextDirection = "LEFT";
				break;
			case "ArrowRight":
				e.preventDefault();
				nextDirection = "RIGHT";
				break;
			case "q":
			case "Escape":
				e.preventDefault();
				cleanup();
				callbacks.onExit(score);
				break;
		}
	}

	function handleTouchStart(e: TouchEvent): void {
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	}

	function handleTouchEnd(e: TouchEvent): void {
		const dx = e.changedTouches[0].clientX - touchStartX;
		const dy = e.changedTouches[0].clientY - touchStartY;
		const absDx = Math.abs(dx);
		const absDy = Math.abs(dy);

		if (Math.max(absDx, absDy) < 30) return;

		if (absDx > absDy) {
			nextDirection = dx > 0 ? "RIGHT" : "LEFT";
		} else {
			nextDirection = dy > 0 ? "DOWN" : "UP";
		}
	}

	// Attach event listeners
	document.addEventListener("keydown", handleKeyDown);
	gameContainer.addEventListener("touchstart", handleTouchStart, {
		passive: true,
	});
	gameContainer.addEventListener("touchend", handleTouchEnd, {
		passive: true,
	});

	// Start
	spawnFood();
	render();
	gameLoopTimeout = window.setTimeout(tick, speed);
}
