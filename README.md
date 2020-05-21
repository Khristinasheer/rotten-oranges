# SECBERUS Frontend Homework Task

### by Khristina Sheer

Deployed website: https://rotten-oranges.now.sh.

All SVG files were minified using [SVGOMG](https://jakearchibald.github.io/svgomg).

It said in the instructions that the Healthy House has a blue roof:

- Four SVG files located in the /public folder. Make sure you use these to portray homes in the view.
  - HealthyHome.svg (Blue roof)
  - ZombieHome.svg (Green roof)
  - EmptyHome.svg (Gray roof)
  - InfectedHome.svg (Light Green Roof)

However, the SVG that was provided for the Healthy House had a red roof. I changed the red color to blue.
I just wanted to point that out to avoid the confusion.

Added dependencies:

- lodash (to return the deep clone value of the grid. For some reason, react wasn't detecting the changes inside 2d array)
