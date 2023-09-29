myPoems = [];

function Poem(title, poem) {
    this.title
    this. poem
}

function addPoemToArray() {
    let title = document.querySelector('#title').value;
    let poem = document.querySelector('#poem').value;

    let newPoem = new Poem(title, poem);
    myPoems.push(newPoem);
}

function render() {
    
}

let submitBtn = document.querySelector('#add-poem');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addPoemToArray();
    console.log(myPoems)
})



