const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/generate-readme.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter your Application Title (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter your Application Title!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your project description!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter any installation instructions (Required)',
            validate: installInput => {
              if (installInput) {
                return true;
              } else {
                console.log('Please enter your installation instructions!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your usage information (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please enter your usage information!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your test instructions (Required)',
            validate: testInput => {
              if (testInput) {
                return true;
              } else {
                console.log('Please enter your test instructions!');
                return false;
              }
            }
        },
        {
          type: 'rawlist',
          name: 'license',
          message: 'Select the license that covers the application',
          choices: ['Apache', 'Boost', 'BSD', 'BSD 2', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Unlicense'],
          
          validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please enter a valid index test!');
              return false;
            }
          }
           
          
      }

      

    ])
.then(userData => {
    
  return userData
});

}

promptUser()
.then(userData => {
    const pageMarkdown = generateReadme(userData);
    fs.writeFile('./dist/README.md', pageMarkdown, err => {
        if (err) throw new Error(err);
        console.log('Read me created');
    });
});

