const btnEl = document.querySelector('.gen-btn');
const emojiEl = document.querySelector('.emoji-name');
const emoji = [];

btnEl.addEventListener('click', function () {
	const randomNum = Math.floor(Math.random() * emoji.length);
	btnEl.innerText = emoji[randomNum].emojiName;
	emojiEl.innerText = emoji[randomNum].emojiCode;
});

async function addEmoji() {
	let response = await fetch('https://emoji-api.com/emojis?access_key=f8b60dcc93a604773eb728abdbe0f8762d1ef97a');
	const data = await response.json();

	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiName: data[i].character,
			emojiCode: data[i].unicodeName,
		});
	}
}
addEmoji();
