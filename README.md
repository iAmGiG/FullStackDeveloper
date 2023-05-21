# This project attempts to reflect a functional web site for a modern restaurant

## Checklist

- [x] configure the server
- [x] implement UI
- [x] run UI with server startup
- [ ] add CSS, template and color to UI
- [ ] About,Menue,Order,Track
- [ ] DB configuration
- [ ] Order table in DB
- [ ] Implement logic for order table
- [ ] CRUD operation in order table
- [ ] Track order with uuid

## Instruction Backend

- If this is the first time to run the app, you will require `.env` file.

- Run `npm init` to configure the package.

- Then do `npm install` to download the packages.

- If the required packages are not installed automatically then run the package name with
  - this command `npm install <package-name>`.

- Run server `node index.js`. The server will run at port: 4200 (default).

## Instructions Frontend

- For first time creation the .angular file should be present, as well as the other angular files
  - this is running on an old angular 13 project (reasons).
- To Build `ng build OpenRestaurant` to begin the build process.
- To Run `ng serve OpenRestaurant` to build and run the program, default address used, `localhost:4200`
  - still need to test backend and front end together.
- Current has no test, but if there was `ng test OpenRestaurant` to have it run.

### Frontend notes

- currently (5/15/23) displays what ever is under the `app.component.html` with the `app.component.ts` acting as the main component space.
- This is just a starting point, would look into updating to angular 16+;
  - when an understanding of crafting components and understanding the event system has improved.
- Haven't done much to the `app.component.sass` file, went with the `.sass` over the `.scss` to gain exposure to the various formats, rather than just use `.css`.

### References

- [git-commit-format] (<https://www.conventionalcommits.org/en/v1.0.0-beta.4/>)
- [express] (<https://expressjs.com/en/4x/api.html>)
