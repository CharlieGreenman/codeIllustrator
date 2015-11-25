#Readme is a work in progress
![Photo of Code Illustrator](http://www.instagram.com/p/-f0o7VSBc7/)
# Introduction

I originally was really into css box-shadows. It was and it is a relatively light weight way of illustrating on the web. You can see, my
Sass version [here](http://codepen.io/razroo-chief/details/qJaiD/). It during a time period where I was exploring drawing with css, for instance
the css desk (here)[http://codepen.io/razroo-chief/pen/ngbuk]
performant it can be, for instance the codepen (here)[http://codepen.io/razroo-chief/full/ngbuk/].

It was around this time, that the following codepen/github made itself to this world's existence. It is called
(Pixelator)[https://github.com/elrumordelaluz/Pixelator], and the timing was perfect. I was really excited to work
on it, and you can see my early (interest)[https://github.com/elrumordelaluz/Pixelator/issues/2].

Unfortunately, the timing was not right. However, I always kept in the back of my mind that I wanted to work on it. There
is something simply beautiful about 8bits. I view them not as some old fashioned way of making graphics, but the here and
now building blocks of the future.

My interest was only perked further by the (Goya)[https://github.com/jackschaedler/goya] project, which performance wise is simply stunning.
Especially the way it s built using React's diff state, built on Clojure Script. I will most definitely be starting a React
implementation of this plugin next. Goya and Pixelator were my two inspirations for what I wanted.

#Front End Stack
##JS##
I decided to go as vanilla as possible for two reasons. One is, I wanted a challenge. Second, I wanted to explore design patterns
basic data structures, and sorting algorithms in pure javascript. I did use es6 implementing babel, however, I did not go too heavy.
Also, being that this is tool built for developers, I had the liberty to assume that it will be used on IE10+. For the next version
I plan on implementing Lodash + React at the very least, and will be exploring other tools that might be potentially useful for this
web app.

##CSS##
For styling I used Sass and a light implementation of SMACSS. I also used Zurb Foundation.
For the next build I plan on implementing 1-7, and BEMCSS.

##HTML##
For actual html of the homepage, I used Jade as a preprocesser. I love Jade, and I am willing to stand by it. It always surprises me of
how versatile it is, and all the cool things you can do with (it)[http://codepen.io/razroo-chief/pen/ZbbgYR]

##Build System##
For my build system, I used by handy dandy Webpack Gulp build system goin' (HAMM)[https://github.com/CharlieGreenman/webpack-gulp-babel-the-works]

#What this project features
--> Css conversion
--> Sass conversion
--> Less conversion
--> JS conversion
--> Ability to change pixel color
--> Ability to change background pixel color

##What makes the stack unique?
This app runs on pure javascript, and implements canvas for drawing. The sorting inserts a value instead of redrawing.

Works on IE10+, Firefox, Chrome, and Safari as a Desktop application.


It has been a very enlightening experience all in all. Some books that I have
read in the process of creating this Code Illustrator include:

--> (Mastering Javascript Design Patterns by Simon Timms)[https://www.packtpub.com/application-development/mastering-javascript-design-patterns]
--> (Learning Javascript Data Structures and Algorithms by Loiane Groner)[https://www.packtpub.com/application-development/learning-javascript-data-structures-and-algorithms]
--> (Learning ECMAScript 6 by Narayan Prusty) [https://www.packtpub.com/web-development/learning-ecmascript-6]

Current version of Code Illustrator, can be seen [here](http://charliegreenman.github.io/codeILL/)

