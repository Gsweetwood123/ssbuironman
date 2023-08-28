const characters = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby","Fox",
                "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",
                "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf",
                "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", " Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Diddy Kong",
                "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac",
                "Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", 
                "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min",
                "Steve", "Sephiroth", "Pyra/Mythra", "Kazuya", "Sora", "Mii Brawler", "Mii Swordfighter", "Mii Gunner"];

const usedCharacter = [];
const gameSizeRadio = document.querySelectorAll('input[name=charAmount]');
const repeatRadio = document.querySelectorAll('input[name=repeatOrNah]');
const choose = document.querySelector('#choose');
const reset = document.querySelector('#reset');
const player1List = document.querySelector('#player1_list');
const player2List = document.querySelector('#player2_list');
let x = 0;
let gamesize1 = 0;
let gamesize2 = 0;


const getRandom = () => {
    return Math.floor(Math.random() * 86);
}

const characterChoice = () => {
    return characters[getRandom()];
}

const getGameSize = () => {
    for (const radioButton of gameSizeRadio) {
        if(radioButton.checked) {
            gamesize1 = +radioButton.value;
            gamesize2 = gamesize1 * 2;
        };
    };
};

const getRepeat = () => {
    for (const radioBtn of repeatRadio) {
        if (radioBtn.checked && (radioBtn.value = 'repeat')) {
            return true;
        } else {
            return false;
        }
    }
}

const checkCharacter = (character) => {
            while (usedCharacter.includes(character)) {
                character = characterChoice();
            };
            return character;
}

const addCharacter = (character, x) => {
    if(x < gamesize1) {
        const li = document.createElement('li');
        li.textContent = character;
        player1List.appendChild(li);
    } else {
        const li2 = document.createElement('li');
            li2.textContent = character;
            player2List.appendChild(li2);
    }
}


choose.addEventListener('click', () => {  
    if ( x === 0) {
        getGameSize();
    }
    let character = checkCharacter(characterChoice()); 
    if (x === gamesize1) {
        if (getRepeat()) {
            usedCharacter.length = 0;
        }
    }
    switch(true) {
        case (x < gamesize1):
            addCharacter(character, x);
            usedCharacter.push(character);
            x++;
            break;
        case (x >= gamesize1 && x < gamesize2):
            addCharacter(character, x);
            usedCharacter.push(character);
            x++
            break;
        };
});

reset.addEventListener('click', () => {
    location.reload();
})  