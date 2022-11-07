import fs from "fs/promises"

let text = await fs.readFile("text.txt", "utf8")

text = text + "\n\n" + "I am now becoming a Node Guru"
console.log(text)

await fs.writeFile("output.txt", text)

console.log("Done!")

// get file statistics

fs.stat("text.txt").then((stats) => {
  console.log("File size: ", stats.size, "bytes")
  console.log("Is a file: ", stats.isFile())
  console.log("Is a directory: ", stats.isDirectory())
})
