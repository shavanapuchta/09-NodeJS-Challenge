// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'GNU') {
    return '(https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'MIT') {
    return '(https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'BSD') {
    return '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else if (license === 'Boost') {
    return '(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === 'Eclipse') {
    return '(https://img.shields.io/badge/License-EPL_1.0-red.svg)';
  } else if (license === 'Mozilla') {
    return '(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else if (license === 'The Unilicense') {
    return '(https://img.shields.io/badge/license-Unlicense-blue.svg)';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Boost') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Eclipse') {
    return '(https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'Mozilla') {
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'The Unilicense') {
    return '(http://unlicense.org/)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
    
${data.description}
  
## Table of Contents
  
-[License](#license)
-[Installation](#installation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)
  
## License

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

This project is licensed under the ${data.license} license.'
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
For questions, please reach out using the following contact information:
  
GitHub Username: ${data.github}
Email: ${data.email}`;
}

module.exports = generateMarkdown;
