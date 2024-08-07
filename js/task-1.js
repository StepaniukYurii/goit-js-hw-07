const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item')

console.log(`Numbers of categories: ${items.length}`)

for (const item of items) {
    const tittle = item.querySelector('h2')
    const listItems = item.querySelectorAll('li')
    console.log(`Category: ${tittle.textContent}`)
    console.log(`Elements:${listItems.length}`)
}
