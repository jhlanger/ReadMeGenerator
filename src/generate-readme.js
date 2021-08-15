module.exports = generateReadme => {
    console.log(generateReadme);
    return `
# ${generateReadme.title}

## Description

[![License](https://img.shields.io/badge/License-${generateReadme.license}-lightblue.svg)]

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

${generateReadme.test}

## License

The following application is covered under the ${generateReadme.license} License. 

## Questions
*Github located here:  [Github](https://github.com/${generateReadme.github})
*Contact me via [Email](mailto:${generateReadme.email})
*If you have any questions feel free to contact me through my email address and I will respond as time allows. 
    `
}

