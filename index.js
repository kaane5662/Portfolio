
const randomStatements = ["I like trains!", "I like planes!", "I actually survived AP!", "Aerospace Engineer or Computer Scientist?"]
var text = document.querySelector('.funnyStatement')

text.style.transition = "10s"
text.innerHTML = randomStatements[Math.floor(Math.random()*randomStatements.length)]





