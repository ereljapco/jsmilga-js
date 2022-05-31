const word = 'picture';
const letters = [...word];

// console.log(word);
// console.log(letters);

const boys = ['Gary', 'Mr. Krabs', 'Squidward'];
const girls = ['Pearl', 'Sandy'];
const bestFriend = 'Patrick';

const friends = [bestFriend, ...boys, ...girls];
console.log(friends);

friends[4] = 'Juana';
console.log(friends);
