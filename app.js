const inquirer = require('inquirer');

const promptUser = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?(Reuqired)',
      validate: nameInput =>{
        if(nameInput){
          return true;
        }else{
          console.log("Please enter your name!");
          return false;
        }
      } 
    },
    {
      type:'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubUsername =>{
        if(githubUsername){
          return true;
        }else{
          console.log('Please enter your GitHub username!')
        }
      }
    },
    {
      type:'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name:'about',
      message: ' Provide some information about yourself:',
      when:({confirmAbout}) =>{
        if(confirmAbout){
          return true;
        }else{
          return false;
        }
      }
    }
  ])
}
const promptProject = portfolioData =>{
  // if there is no 'project' array property , create one 
  if(!portfolioData.projects){
    portfolioData.projects = [];
  }

  console.log(`
  =========================
  Add a New Project
  =========================
  `);
  return inquirer.prompt([
    {
      type:'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectName =>{
        if(projectName){
          return true;
        }else{
          console.log("Please enter your project name!")
        }
      }
    },
    {
      type:'input',
      name:'description',
      message: 'Provide a description of the project(required)',
      validate: projectDescripe =>{
        if(projectDescripe){
          return true;
        }else{
          console.log('Please descript your project!')
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['Javascript', 'HTML', 'CSS','ES6','JQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name:"link",
      message: 'Enter the GitHub link to your project. (Required)',
      validate: ProjectLink =>{
        if(ProjectLink){
          return true;
        }else{
          console.log('Please enter your project GitHub link!')
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message:'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name:'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
 

  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
}
promptUser()
.then(promptProject)
.then(portfolioData =>{
  console.log(portfolioData);
})
/* const fs = require('fs');
const generatePage = require(`./src/page-template.js`);

const pageHTML = generatePage(name, github);


fs.writeFile('./index.html',pageHTML,err =>{
  if(err) throw err;
  console.log('Portfolio complete! Check out index.html to see the output!');
}) */






/*  const profileDataArgs = process.argv.slice(2); */
/* function generatePage(userName, githubName) {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
} */
/* const generatePage = (userName, githubName)=>`Name: ${userName}, Github: ${githubName}`; */
/* console.log(generatePage(`jane`, `janehub`));
 */


// 这个作用是为了把里面的东西一个个都遍历出来 ，方便进行批量化操作，比如批量换文件格式等等。
/* const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
}; */

