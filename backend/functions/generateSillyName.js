// Arrays of silly words
const adjectives = ['Funny', 'Silly', 'Goofy', 'Bouncy', 'Zany', 'Wacky', 'Quirky'];
const nouns = ['Banana', 'Pickle', 'Penguin', 'Donut', 'Noodle', 'Toothbrush', 'Squirrel'];

// Function to generate a random silly name
module.exports = function generateSillyName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return adjective + ' ' + noun;
}
