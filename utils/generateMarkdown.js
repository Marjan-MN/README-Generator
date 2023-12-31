
//Create a function to generate markdown for README
class MarkDown {
  static renderLicenseBadge(license) {
    console.log(license)
    const badge = {
      gnuplv3: '[![License: GNU](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.md)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    return badge[license]
  }

  static renderLicenseLink(license) {
    const licenseLinks = {
      gnuplv3: '[GNU](https://choosealicense.com/licenses/gpl-3.0/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      mit: '[mit](https://choosealicense.com/licenses/mit/)'
    }
    return licenseLinks[license]
  }

  static renderLicenseSection(license) {
    if (license) {
      return `Licesed under the ${this.renderLicenseLink(license)} license`
    } else {
      return ""
    }
  }

  static generateMarkdown(answers) {
    return `

${this.renderLicenseBadge(answers.license)}

# ${answers.title}
## Table of Content
  - [Project description](#description)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Installation](#installation)
  - [Questions](#questions)
  - [License](#license)

## Description 
  ${answers.description}

## Usage 
  ${answers.usage}

## Contributing 
  ${answers.contributing}

## Installation 
  ${answers.installation}

## Questions 
  ${answers.email}
  ${answers.github}

  ## License 
  ${this.renderLicenseSection(answers.license)}
`;
  }
}

module.exports = MarkDown;