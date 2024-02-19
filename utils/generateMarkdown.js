// function to generate markdown for README
function generateMarkdown(data) {

}
  return `# ${data.title}
  [![Lincese: ${data.lincese}](${licenseBadge})](${licenseURL})
  
  
`;


module.exports = generateMarkdown;
