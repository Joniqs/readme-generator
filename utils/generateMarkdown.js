// function to generate markdown for README
function generateMarkdown(data) {
    // map license choice to badge URL
    let licenseBadgeURL;
    switch (data.license) {
      case "MIT":
        licenseBadgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
      case "Apache-2.0":
        licenseBadgeURL = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        break;
      case "GPL-3.0":
        licenseBadgeURL = "https://img.shields.io/badge/License-GPLv3-blue.svg";
        break;
      case "BSD-3-Clause":
        licenseBadgeURL = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
        break;
      case "Unlicense":
        licenseBadgeURL = "https://img.shields.io/badge/license-Unlicense-blue.svg";
        break;
      default:
        licenseBadgeURL = "";
    }
  
    return `# ${data.title}
  
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
    
    ## License
    [![License](${licenseBadgeURL})](https://opensource.org/licenses/${encodeURIComponent(data.license)})
    This project is licensed under the ${data.license} license.
    
    ## Contributing
    ${data.contribution}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    If you have any questions, please feel free to contact me via email at ${data.email}, or visit my [GitHub profile](https://github.com/${data.github}).`;
  }
  
  module.exports = generateMarkdown;
  
  