#Readme is a work in progress
![Photo of Code Illustrator](/illustrator_screen_shot.png?raw=true "Code Illustrator Photo")
# Introduction

I originally was really into css box-shadows. It was and it still is a relatively light weight way of illustrating on the web.
During this time I started experimenting with linear gradients and box shadows.
For instance, one can see the [desk](http://codepen.io/razroo-chief/pen/ngbuk) made out of box shadows and linear gradients, and
the [Super Mario](http://codepen.io/razroo-chief/details/qJaiD/) made using Sass and box-shadows. Life was good.

It was around this time, that the following codepen/github made itself to this world's existence. It is called
[Pixelator](https://github.com/elrumordelaluz/Pixelator), and the timing was perfect. I was really excited to work
on it, and you can see my early [interest](https://github.com/elrumordelaluz/Pixelator/issues/2).

Unfortunately, the timing was not right. However, I always kept in the back of my mind that I wanted to work on it on a illustrator to code
web app. There is something simply beautiful about 8bits. I view them not as some old fashioned way of making graphics, but the here and
now building blocks of the future. Especially with WebGL, it really opened up the possibilities.

My interest was only perked further by the [Goya](https://github.com/jackschaedler/goya) project, which performance wise is simply stunning.
Especially the way it s built using React's diff state, built on Clojure Script. I will most definitely be starting a React
implementation of this plugin next. Goya and Pixelator were my two inspirations for what I wanted, and they still are. Well enough about me,
let's get down to this amazing Web App.

#Front End Stack
##JS##
I decided to go as vanilla as possible for two reasons. One, I wanted a challenge. Second, I wanted to explore design patterns
basic data structures, and sorting algorithms in pure javascript. I did use es6 implementing babel, however, I did not go too heavy.
(+1 for template strings, were a huge help in this project) Also, being that this is tool built for developers, I had the liberty to assume that it will be used on IE10+.
For the next version I plan on implementing Lodash + React at the very least, and will be exploring other tools that might be potentially useful for this
web app.

##CSS##
For styling I used Sass and a light implementation of SMACSS. I also used Zurb Foundation.
For the next build I plan on implementing 1-7, and BEMCSS.

##HTML##
For actual html of the homepage, I used Jade as a preprocesser. I love Jade, and I am willing to stand by it. It always surprises me of
how versatile it is, and all the cool things you can do with [it](http://codepen.io/razroo-chief/pen/ZbbgYR). Say hello to HAML if you see her,
it's been awhile.

##Build System##
For my build system, I used by handy dandy Webpack Gulp build system goin' [HAMM](https://github.com/CharlieGreenman/webpack-gulp-babel-the-works).

#What this project features
| Feature                 | Present |
|-------------------------|---------|
| Css conversion          | ✔       |
| Sass conversion         | ✔       |
| Less conversion         | ✔       |
| JS conversion           | ✔       |
| Change pixel color      | ✔       |
| Change background color | ✔       |

##What makes the stack unique?
This app runs on pure javascript, and implements canvas for drawing. It is super quick and everything is modular, allowing for future releases
of this app to be extremely intuitive and for others to commit and join this project very easily. Everything is very transparent.

Works on IE10+, Firefox, Chrome, and Safari as a Desktop application.

It has been a very enlightening experience all in all. Some books that I have
read in the process of creating this Code Illustrator include:

---
[Mastering Javascript Design Patterns by Simon Timms](https://www.packtpub.com/application-development/mastering-javascript-design-patterns)
---
[Learning Javascript Data Structures and Algorithms by Loiane Groner](https://www.packtpub.com/application-development/learning-javascript-data-structures-and-algorithms)
---
[Learning ECMAScript 6 by Narayan Prusty](https://www.packtpub.com/web-development/learning-ecmascript-6)

Current version of Code Illustrator, can be seen [here](http://charliegreenman.github.io/codeILL/)

