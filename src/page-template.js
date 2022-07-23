const generateAbout = aboutText =>{
  if(!aboutText){
    return '';
  }
  return `
  <section class="my-3" id="about">
  <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
  <p>${aboutText}</p>
  </section>
  `;
}
const genrateProjects = projectsArr =>{   
 return `
  <section class="my-3" id="portfolio">
  <h2 class="text-dark bg-primary  p-2 display-inline-block">Work</h2>
  <div class="flex-row justify-space-between">
  ${projectsArr
  .filter(({feature})=>feature)
   .map(({name,description,languages,link})=>{
    return `
    <div class="col-12 mb-2 bg-dark text-light p-3>
    <h3 class="portfolio-item-title text-light">${name}</h3>
    <h5 class="portfolio languages">
    Built With:
    ${languages.join(", ")}
    </h5>
    <p>${description}</p>
    <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
    </div>
    `
   })
  .join(" ")}

  ${projectsArr
  .filter(({feature})=>!feature)
   .map(({name,description,languages,link})=>{
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
    <h3 class="portfolio-item-title text-light">${name}</h3>
    <h5 class="portfolio-languages">
    Built With:
    ${languages.join(', ')}
    </h5>
    <p>${description}</p>
    <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
    </div>
    `;
   })
.join(' ')}
</div>
</section> 
`;
  }

/* const featuredProjects = projectsArr.filter(project =>{   // 过滤掉不要的条件
  if(project.feature) {
    return true ;
  }else {
    return false;
  }
});
const nonFeaturedProjects = projectsArr.filter(project =>{
  if(!project.feature){
    return true;
  }else{
    return false;
  }
}) */

//// map 就是取出数组的每个值 对其进行你想做的工作后返回新的值、
  // 比如：const array1 = [1, 4, 9, 16];
// pass a function to map
//const map1 = array1.map(x => x * 2);
//console.log(map1);
/* const featuredProjectHtmlArr = featuredProjects.map(({name,description,languages,link})=>{
  return `
  <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
  <h3 class="portfolio-item-title text-light">${name}</h3>
  <h5 class="portfolio-languages">
  Built With:
  ${languages.join(', ')}
  </h5>
  <p>${description}</p>
  <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  </div>
  `
})
  const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(({name,description,languages, link}) =>{
return `
<div class="col-12 col-md-6 bg-dark text-light p-3 flex-colum">
<h3 class="portfolio-item-title text-light">${name}</h3>
<h5 class="portfolio-languages">
Built With:
${languages.join(', ')}
</h5>
<p>${description}</p>
<a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Porject on Github
</a>
`;
  });

  return `
   <section class="my-3" id="portfolio">
   <h2 class="text-dark bff-primary p-2 display-inline-block">Work</h2>
   <div class="flex-row justify-space-between">
 ${featuredProjectHtmlArr.join('')} 
 ${nonFeaturedProjectHtmlArr.join('')}
   </div>
   </section>
  `;
}; */
// join 是把数组中所有的元素转换为字符串
module.exports  = templateData => {
  console.log(templateData);
  const {projects,about, ...header} = templateData;
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
   
    <body>
    <header>
    <div class="container flex-row justify-space-betwen align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3>${header.name}</h1>
      <nav class="flex-row">

      <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">Github</a>
      </nav>
      </div>
      </header>
      <main class="container my-5">
      ${generateAbout(about)}
      ${genrateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
   }
