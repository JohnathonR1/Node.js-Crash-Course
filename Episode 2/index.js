const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        // Read current file
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        // Log it
        console.log(data)

        // Delete starter.txt
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        
        // Create promiseWrite
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)

        // Edit promiseWrite
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.')

        // Rename promiseWrite to promiseComplete
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))

        // Get the new data
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')

        // Log it
        console.log(newData)
    } catch (err) {
        // Log any errors
        console.error(err)
    }
}

fileOps()

// // Write file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err
//     console.log('Write complete')

//     // Append  file
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYou too!', (err) => {
//         if (err) throw err
//         console.log('Append complete')

//         // Rename  file
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err
//             console.log('Rename complete')
//         })
//     })
// })

// Exit if an error occurred
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})
