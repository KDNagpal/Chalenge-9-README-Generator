const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./generateMarkdown');
const writeREADME = util.promisify(fs.writeFile);


//function for README questions
function promptUser() {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } if(!titleInput) {
                console.log("Your README should have a title!");
                return false;
            }
        }
        
    },
    {
        type: 'input',
        message: 'Enter a quick description of your project and its purpose.',
        name: 'description',
        validate: descriptInput => {
            if(descriptInput) {
                return true;
            } if(!descriptInput) {
                console.log("The README should a description!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How does we install your application?',
        name: 'installation',
        validate: installInput => {
            if(installInput) {
                return true;
            } if (!installInput) {
                console.log("You should include installation instructions. Otherwise enter 'N/A'");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How do we use your application? ',
        name: 'usage',
        validate: useInput => {
            if(useInput) {
                return true;
            } if(!useInput) {
                console.log("You should add user instructions or enter 'N/A'")
            }
        }
    },
    {
        type: 'input',
        message: 'Add anyone you want credit?',
        name: 'credits',
        validate: creditInput => {
            if(creditInput) {
                return true;
            } if (!creditInput) {
                console.log("You should credit anyones work you may have used. If it is only your work then enter 'N/A'")
            }
        }
    },
    {
        type: 'confirm',
        message: 'Would you like to add a license?',
        name: 'confirmLicense',
        default: false,
    },
    {
        type: 'list',
        message: 'Choose a license',
        choices: ['Unlicense', 'MIT'],
        name: 'license',
        when: ( {confirmLicense} ) => {
            if(confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contribute',
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            } if(!contributeInput) {
                console.log("You should let other know how they can contribute to your application or enter 'N/A'");
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } if(!emailInput) {
                console.log("Please enter your email address or enter 'N/A'");
                return false;
            }
        } 
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } if(!nameInput) {
                console.log("Please enter your GitHub username or enter 'N/A'");
                return false;r
            }
        } 
    }
   

])
}


async function generate() {
    try {
        const answers = await promptUser();
        const generateREADME = generateMarkdown(answers);
        await writeREADME('./generated/README.md', generateREADME)
        console.log('README generated!! Check the "Generated" folder')
        }   catch(err) {
            console.log(err);
        }
        
}
    

// Function call to start generator

generate();