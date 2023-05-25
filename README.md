![Frontend Status](https://github.com/OSU-Sustainability-Office/sustainability_jeopardy/actions/workflows/gh-deploy.yml/badge.svg)

# Sustainability Jeopardy
This repository stores code for the OSU Sustainability Office's Sustainability Jeopardy game, used for tabling at various events. This repository used to store a previous version of jeopardy built with plain JS, PHP, HTML, and CSS. The current version has been updated to rely upon VueJS, and the rest of the standard OSU SO software stack.

## Installation Steps
- Fork this repo
- Change the package.json and backend/template.yaml to reflect correct project name
- ```npm install```

### Other Notes
- There is no "backend" for this app. This is because Jeopardy questions change so infrequently that I felt API infrastructure was overkill for this app. You will find all of the questions and answers hard-coded in the VueX store.
