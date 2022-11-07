const fs = require("fs/promises")

async function readText() {
  let text = await fs.readFile("text.txt", "utf8")

  text = text + "\n\n" + "I am now becoming a Node Guru"
  console.log(text)

  await fs.writeFile("output.txt", text)

  console.log("Done!")
}

readText()

// get file statistics

fs.stat("text.txt").then((stats) => {
  // console.log(stats)
  console.log("File size: ", stats.size, "bytes")
  console.log("Is a file: ", stats.isFile())
  console.log("Is a directory: ", stats.isDirectory())
})

// console.log(fileStats)
