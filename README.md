<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

# 📖 Testing Project <a name="about-project"></a>

Testing Microverse! project is a repository consisting of the following files:

- JS files
- Jest lib

The repository also contains files for setting up linters and validators.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://jestjs.io/">JEST</a></li>
      <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
 
  </ul>

### Key Features <a name="key-features"></a>

## [Testing Project](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/testing/testing_practice.md)

### Features Added:

- Set up a new project with Node and JEST Lib
- jest framework Used for testing.
- *describe()* method is uded to group test cases
- A test file (add-remove.test.js) [LL1C1-L21C4](https://github.com/Benawi/Microverse-Testing-ToDolist/blob/08e120a6a08a46fe73ec7545602ea010aaec2f33/src/test/add-remove.test.js#LL1C1-L21C4) is created for a file containing the add item and delete item functions that to be tested.
- A test file (update.test.js) [L1C1-L72](https://github.com/Benawi/Microverse-TestingToDolist/blob/99d01b6e450c1bc24be68f746ecbd8071540f510/src/test/update.test.js#L1C1-L72) is created and containing the following functions:
   - A function for editing the task description.
   - A function for updating an item's 'completed' status.
   - The "Clear all completed" function.
   - The mock storage object usedwhich been  have created in Part 1 of this project to mock the localStorage updates.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Not available](#)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:myaccount/my-project.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Instructions
- Use jest framework for testing.
- Create a test file ([..].test.js) for a file containing the add item and delete item functions that you want to test.
- Take a look at each of these functions. Are they pure functions? If the answer is "yes" then writing tests for them should be straightforward. Some of those functions however will update localStorage and manipulate the DOM. For those, you will need to use mocks:
- Mock a storage object to "imitate" localStorage operations (only if you are using jest < 24.x, in newer versions localStorage is mocked automatically).
Mock HTML to test if add/delete functions add or remove exactly one <li> element to/from the list in the DOM.
- Make sure you group your tests using the describe() method.
- Create a test file(s) ([..].test.js) for a file(s) containing the following functions:
   - a function for editing the task description.
   - a function for updating an item's 'completed' status.
   - the "Clear all completed" function.
- Use the mock storage object you have created in Part 1 of this project to mock the localStorage updates.
### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:

Download all the dependencies run:

```
npm install
```

To test run:

```
npm run test
```

Track JavaScript linter errors run:

```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu

- GitHub: [Benawi](https://github.com/Benawi)

### 👤 Peter Dumbari

- GitHub: [Peter-Dumbari](https://github.com/Peter-Dumbari)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

What can go wrong with this function? For example, what happens if someone provides an integer as an input for this function?

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank Microverse program for providing me this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
