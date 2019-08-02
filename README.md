# Denali Site

[![slack](https://img.shields.io/badge/slack-Denali-3570f4.svg)](https://denali-design.slack.com/app_redirect?channel=general)
<!-- ![build](https://img.shields.io/badge/build-1.2.3-brightgreen.svg) -->
## Table of contents
- [Background](#background)
- [Install](#install)
- [Usage](#run-local-website)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [Contribute](#contribute)
- [License](#license)

---

## Background
The Denali System Language was created by the Platforms and Technology Design team at Verizon Media as a scalable method for designing and developing visually consistent and functional internal products. The Denali website houses our entire component library, icon font family, and CSS framework complete with corresponding code snippets and documentation. Additionally, the site is also home to our design principles, which outline the proper implementation of our components within a product’s UI.

You can view the site at [here](https://denali-design.github.io/denali-site/).

## Install

### Prerequisites
You will need to have these tools installed to run the site. Follow the instructions on their corresponding sites to install.

1. [Ruby](https://www.ruby-lang.org/)
2. [Jekyll](https://jekyllrb.com/)
3. [Bundler](https://bundler.io/)
4. [GitHub-Pages for Jekyll](https://jekyllrb.com/docs/github-pages/)
5. [Compass](http://compass-style.org/)
6. [Tzinfo-data](https://github.com/tzinfo/tzinfo-data)

> Note: This guide assumes you have the prerequisites installed locally and will not go over instructions on how to install these.

### Run Local Website
After all prerequisites are installed follow these instructions to run a local version of this repository.

Clone or download this repository.
```
denali-system-language/denali-styleguide.git
```

Use terminal or any command line tool and navigate to where you downloaded the repository.
```
cd user/documents/git/denali-styleguide
```

Run the site using this.
```
jekyll serve --config _config.yml,_config.dev.yml
```

You should be prompted with a success message and the url to use to view the site.

## Browser Support
-  **Chrome** on Android, Windows, macOS, and Linux
-  **Firefox** on Windows, macOS, and Linux
-  **Safari** on iOS and macOS

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this [repository](https://github.com/denali-design/denali-site).

## Contribute
To start contributing to Denali, have a look at our guidelines, as well as pointers on where to start making changes, in our [contributing guide](CONTRIBUTE.md).

## Maintainers
- **Jay Torres** | *Dir Product Design for Core Platforms* (torresr@verizonmedia.com)
- **Chris Esler** | *Principle Software Dev Engineer* (cesler@verizonmedia.com)
- **Chas Turansky** | *Product Designer & Front-End Dev* (cturansky@verizonmedia.com)
- **Jazmin Orozco** | *Product Designer* (jorozco@verizonmedia.com)
- **Marco Sandoval** | *Product Designer* (msandoval@verizonmedia.com)

## License
Code licensed under the MIT license. See [LICENSE file](LICENESE.md) for terms.
