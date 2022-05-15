 ## Netflix Clone
# [Click here to visit the Website](https://netflix-clone-337d4.web.app)

### Technologies

HTML - CSS - JS - React - NPM - Git - Firebase

### Libraries

* [axios](https://www.npmjs.com/package/axios)
* [react-youtube](https://www.npmjs.com/package/react-youtube)
* [movie-trailer](https://www.npmjs.com/package/movie-trailer)

```sh
   npm i axios react-youtube movie-trailer
```
### API

[TMDB](https://www.themoviedb.org/)
1. Register for the website and verify your e-mail.
2. Settings > API.
3. [Documentation](https://developers.themoviedb.org/3/getting-started/introduction) for making requests.

### Overview

Although my web app looks and feels like Netflix, it functions differently. Since I can't create a database with full movies of every title, I decided to play trailers of the movies instead. For this reason I'm using the react-youtube and movie-trailer libries.

With the data I fetch from TMDB, I populate my react components with relevant information, and let movie-trailer find the youtube path, and react-youtube takes that path and creates a Youtube div below the row once a poster is clicked.

Finally I've added responsive styling to keep the design experience smooth on various devices.

### Features

* Looks near identical in terms of styling to the current version of Netflix.
* Dynamically updated content as it works with the movie database API.
* Plays trailers of the titles. 
* Overlay section to see more info about the titles.
* 100% Responsive, all the way down to the smallest phone screens!


