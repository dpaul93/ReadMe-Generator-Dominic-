// function to generate markdown for README
function generateMarkdown(answers) {

  return `

  # ${answers.title}
  [![Lincese: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
  
  <!-- Table Of Contents -->
  <section>
  <summary> Table Of Contents</summary>
  <ol>
  <li><a href="#title">Title</a></li>
  <li><a href="#description">Description</a></li>
  <li><a href="#contents">contents</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#tests">Tests</a></li>
  <section/>

  ##Title

  ${answers.title}

  ##Description

  ${answers.description}

  ##Contents

  ${answers.contents}

  ##Installation

  ${answers.installation}

  ##Usage

  ${answers.usage}

  ##License

  ${answers.license}

  ##Contributing

  ${answers.contributing}

  ##Tests

  ${answers.tests}

  ##Contact

  If you would like to visit my repository or browse my other projects. You can find my GitHub Profile: [github.com/${answers.github}] LinkedIn: at ${answers.Linkedin} or by email at ${answers.email}
  
`;
}

module.exports = generateMarkdown;
