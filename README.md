# JSON Resume Vite Boilerplate Theme

This is a boilerplate theme for the [JSON Resume](https://jsonresume.org) project. Unlike the [json-resume-boilerplate](https://github.com/jsonresume/jsonresume-theme-boilerplate) project, this project makes use of modern build tools to improve the developer experience when creating new themes.

- [JSON Resume](https://jsonresume.org) - Open Source JSON Resume standard
- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- [Vite](https://vitejs.dev) - Next Gen Frontend Tooling

## Creating your own Themes

This is a **template repository**.

You can create your own copy of it by clicking the _"User this template"_ above.

## Usage
This project uses [vite](https://vitejs.dev), [tailwindcss](https://tailwindcss.com) and resume-cli for all of its build processes.

`package.json` provides a few scripts for development, build, and preview.

```bash
# Run development server
npm start

# Build the resume using resume.json in the root directory
npm run build

# Run a server to preview the build
npm run preview

# Export resume to a pdf
npm run export
```