import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'
import chalk from 'chalk'

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

// clean up possible remaining files from cloning process
// that occurs during gatsby site develop or build
let clone_cleanup = async () => {
    const hrstart = process.hrtime()
    console.log(chalk.green('success ') + 'load clone_cleanup')

    // Remove leftover clone data and components as needed
    console.log(chalk.blue('info ') + 'seeking leftover files from previous build')

    let removedCounter = 0
    let data_list = fs.readdirSync('./src/data')
    data_list.forEach((data_file) => {
        if (data_file.includes('--index')) {
            fs.unlinkSync(`./src/data/${data_file}`)
            removedCounter++
        }
    })

    const component_list = fs.readdirSync('./src/components')
    component_list.forEach((component_file) => {
        if (component_file.includes('--index')) {
            fs.unlinkSync(`./src/components/${component_file}`)
            removedCounter++
        }
    })

    console.log(chalk.green('success ') + `removed ${removedCounter} leftover files`)

    // collect components used by index page
    const indexTemplate = path.resolve(`./src/templates/index.js`)
    const buffer = await readFileAsync(indexTemplate)
    const contents = buffer.toString()

    // restore index imports to be the orignal components
    const contentsReplacement = contents.replace(
        /(import [\w]* from (?:'|"|`)\.\.\/components\/)([^Layout][\w]*)--index('|"|`)/g,
        '$1$2$3'
    )

    if (contents != contentsReplacement) {
        await writeFileAsync(indexTemplate, contentsReplacement)
        console.log(chalk.green('success ') + `restored imports in ${indexTemplate}`)
    } else {
        console.log(chalk.blue('info ') + `no change to imports in ${indexTemplate}`)
    }

    const hrend = process.hrtime(hrstart)
    console.log(chalk.green('success ') + `finished clone_cleanup - ${(hrend[0] + hrend[1] / 1000000000).toFixed(3)}s`)
}

await clone_cleanup()
