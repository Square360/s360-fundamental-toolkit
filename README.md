# Square360 Fundamental Toolkit

This toolkit include several libraries including; SASS Toolkit, Breakpoint SASS and Susy v2.
It also provides a set of default variables for breakpoints, a Susy 12 column grid map, 
gutters and various functions for text and DOM manipulation.

## Table of Contents

1. [Installation](#markdown-header-installation)
2. [Setup](#markdown-header-setup)
3. [SCSS Folder](#markdown-header-scss-folder)
	- \_variables.scss
	- toolkit.scss
	+ **common**
		- \_base.scss
		- \_reset.scss
	+ **core**
		- \_breakpoints.scss
		- \_fonts.scss
		- \_layout.scss
		+ **extendables**
			- \_flex.scss
		+ **functions**
			- \_enumerate.scss
			- \_rem.scss
			- \_scale-font.scss
			- \_strip-unit.scss
		+ **mixins**
			- \_flip-horizontal.scss
			- \_font-smoothing.scss
			- \_input-placeholder.scss
			- \_remove-text.scss
4. [Images Folder](#markdown-header-images-folder)

## Installation

Navigate to the folder in your project where the `package.json` file is located and run the following:

```bash
npm install --save git+ssh://git@bitbucket.org:sq360_sysadmin/s360-fundamental-toolkit.git
```

## Setup

Once it's finished downloading, add the following to the very top of your main `*.scss` file:

```scss
@import "~s360-fundamental-toolkit/scss/toolkit";
```
## SCSS Folder



## Images Folder

The folder holds any global image(s) that can be used on any website.  Any image 
in this folder can be added to your scss file when use the variable `$s360ft-image-path`
or HTML markup.  See table below:

| Files | SCSS | HTML |
|:------|:-----|:-----|
| loader.svg | url("\#\{$s360ft-image-path\}/loader.svg"); | \[path-to-dist-images\]/loader.svg |

_\[path-to-dist-images\] is typically `/assets/dist/images`_