# Square360 Fundamental Toolkit

This toolkit include several libraries including; SASS Toolkit, Compass Mixins, Breakpoint SASS and Susy v2.
It also provides a set of default variables for breakpoint sizes, a Susy 12 column grid map, gutters for the grid and various functions for text and DOM manipulation.

## Table of Contents

1. [Installation](#markdown-header-installation)
2. [SCSS Folder]
	+ [core]
		- [extendables]
		- [functions]
		- [mixins]
		- [layout]
		- [breakpoints]
	- [variables]

## Installation

Navigate to the folder in your project where the `package.json` file is located and run the following:

```bash
npm install --save git+ssh://git@bitbucket.org:sq360_sysadmin/s360-fundamental-toolkit.git
```

Once it's finished downloading, add the following to the very top of your main `*.scss` file:

```scss
@import "~s360-fundamental-toolkit/scss/toolkit";
```