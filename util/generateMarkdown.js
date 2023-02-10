const licenses = [
  {
    type: 'Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'http://unlicense.org/',
  },
  {
    type: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },
];

const renderBadge = license => {
  if (!license) return '';

  const licenseType = licenses.find(lic => lic.type === license);
  return licenseType ? licenseType.badge : '';
};

const renderLink = license => {
  if (!license) return '';

  const licenseType = licenses.find(lic => lic.type === license);
  return licenseType ? licenseType.link : '';
};

const generateMarkdown = data => `# ${data.title}

${renderBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributions](#Contributions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLink(data.license)}

## Contributions

${data.contribute}

Email: ${data.email}
GitHub: [${data.username}](https://github.com/${data.username})
`;

module.exports = generateMarkdown;