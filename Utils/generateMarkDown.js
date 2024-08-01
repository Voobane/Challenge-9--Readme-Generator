// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
  }
  return '';
}   

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
      return `[${license}](https://opensource.org/licenses/${license.replace(' ', '-')})`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `## License

This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${data.email}). You can also check out my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
