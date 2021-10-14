const player1 = {
  name: 'kitana',
  hp: 30,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['', ''],
  attack: function () {
    console.log(this.name + '' + 'Fight...');
  },
};

const player2 = {
  name: 'scorpion',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['', ''],
  attack: function () {
    console.log(this.name + ' ' + 'Fight...');
  },
};

function createPlayer(name, player) {
  const $player = document.createElement('div');
  $player.classList.add(`${name}`);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = `${player.hp}%`;

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = player.name;

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $img = document.createElement('img');
  $img.src = player.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);

console.log(createPlayer());
