module.exports = generateReadme => {
    console.log(generateReadme);
    return `
# ${generateReadme.title}

## Description
${generateReadme.description}

## Table of Contents

*[Installation Instructions](#Installation-Instructions)
*[Usage](#Usage)
*[Contributing](#Contributing)
*[Tests](#Tests)
*[Questions](#Questions)

## Installation Instructions

${generateReadme.install}

## Usage

${generateReadme.usage}

## Contributing

Made by ${generateReadme.name}

## Tests

${generateReadme.tests}

## Questions
*Find me on [Github](https://github.com/${generateReadme.github})
*Contact me via [Email](mailto:${generateReadme.email})
*If you have any questions feel free to contact me through my email address and I will respond as time allows. 
    `
}

