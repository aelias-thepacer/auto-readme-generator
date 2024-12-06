// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![Static Badge](https://img.shields.io/badge/License%3A-MIT-blue)";

    case "Apache 2.0":
      return "![Static Badge](https://img.shields.io/badge/License%3A-Apache_2.0-blue)";

    case "GPL":
      return "![Static Badge](https://img.shields.io/badge/License%3A-GPL-blue)";

    case "BSD (2-clause)":
      return "![Static Badge](https://img.shields.io/badge/License%3A-BSD_(2--clause)-blue)";

    case "BSD (3-clause)":
      return "![Static Badge](https://img.shields.io/badge/License%3A-BSD_(3--clause)-blue)";

    case "BSD (4-clause)":
      return "![Static Badge](https://img.shields.io/badge/License%3A-BSD_(4--clause)-blue)";

    default :
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://www.mit.edu/~amini/LICENSE.md";

    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0.txt";

    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0.txt";

    case "BSD (2-clause)":
      return "https://opensource.org/license/bsd-2-clause";

    case "BSD (3-clause)":
      return "https://opensource.org/license/bsd-3-clause";

    case "BSD (4-clause)":
      return "https://www.freebsd.org/copyright/license/";

    default :
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This project is licensed under the ${license} license. For more information, see [here](${renderLicenseLink(license)}).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
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

${data.contribute}

## Tests

${data.testing}

## Questions

My Github profile is ${data.gitHub}. You can also reach me at ${data.email} if you have additional questions.`;
}

export default generateMarkdown;
