/* 
1. Project will return a random nickname.
2. It will return a random "name" from db1 and "last name" from db2 and group them together. 
3. The user can specify a "name" or "last name", then the program will just return the missing one and group them together.
4. Nickname can have a treatment pronoun, which can also be randomly generated or choosen by the user.
*/

// Names Database
const nameArr = ['Azueraya', 'Misewus', 'Brasi', 'Tarayn', 'Thaliena', 'Arker'];

// Last Names Database
const lastNameArr = ['Ewooth', 'Aiya', 'Galdfaher', 'Yboen', 'Glan', 'Zaured'];

// Treatment Pronouns
const pronounsArr = ['Sir.', 'Mr.', 'Ms.']


const generateNickname = (name, lastName, pronoun) => {
    let nickname = [];
    if(pronoun === 'random') {
        let randomPronoun = pronounsArr[Math.floor(Math.random() * pronounsArr.length)];
        pronoun = randomPronoun;
        nickname.push(pronoun);
    } else if(pronoun !== 'random') {
        nickname.push(pronoun);
    }
    if(name === 'random') {
        let randomName = nameArr[Math.floor(Math.random() * nameArr.length)];
        name = randomName;
        nickname.push(name);
    } else {
        nickname.push(name);
    }
    if(lastName === 'random') {
        let randomLastName = lastNameArr[Math.floor(Math.random() * lastNameArr.length)];
        lastName = randomLastName;
        nickname.push(lastName);
    } else {
        nickname.push(lastName);
    }
    return nickname.join(' ');
}

console.log(generateNickname('random', 'random', 'random'));
console.log(generateNickname('random', 'random'));
console.log(generateNickname('Bruno', 'random', 'random'));
console.log(generateNickname('random', 'Garcia', 'random'));