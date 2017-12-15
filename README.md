# Square360 Fundamental Toolkit

This toolkit include several libraries including; SASS Toolkit, Breakpoint SASS and Susy v2.
It also provides a set of default variables for breakpoints, a Susy 12 column grid map, gutters and various functions for text and DOM manipulation.

## Table of Contents

1. [Installation](#markdown-header-installation)
2. [SCSS Folder]
	+ [common](#markdown-header-common)
		- [\_base](#markdown-header-base.scss)
		- [\_reset](#markdown-header-_reset)
	+ [core](#markdown-header-core)
		- [extendables](#markdown-header-extendables)
		- [functions](#markdown-header-functions)
		- [mixins](#markdown-header-mixins)
		- [\_breakpoints](#markdown-header-)
		- [\_fonts](#markdown-header-)
		- [\_layout](#markdown-header-)
	- [\_variables](#markdown-header-)
	- [\_toolkit](#markdown-header-)
3. [Images Folder]

----

## Installation

Navigate to the folder in your project where the `package.json` file is located and run the following:

```bash
npm install --save git+ssh://git@bitbucket.org:sq360_sysadmin/s360-fundamental-toolkit.git
```

Once it's finished downloading, add the following to the very top of your main `*.scss` file:

```scss
@import "~s360-fundamental-toolkit/scss/toolkit";
```

----

## SSCS Folder

### common

#### base.scss



### core