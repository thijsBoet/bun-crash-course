// const data = 'I love JavaScript'
// await Bun.write('file.txt', data)

const file = await Bun.file('file.txt')
console.log(await file.text()) // I love JavaScript
console.log(await file.size);
console.log(await file.stream());
console.log(await file.arrayBuffer());
