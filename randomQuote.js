let text = document.querySelector('.text');
let quotes = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela', 'The way to get started is to quit talking and begin doing. -Walt Disney', 'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt', 'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa', 'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt'];

function generate(){
let rndQuote = Math.floor(Math.random() * quotes.length);
text.textContent = quotes[rndQuote];
}