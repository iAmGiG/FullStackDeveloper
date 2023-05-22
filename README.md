# This project attempts to reflect a functional web site for a modern restaurant

## Checklist

- [ ] configure the server
- [ ] implement UI
- [ ] run UI with server startup
- [ ] add CSS, template and color to UI
- [ ] About,Menue,Order,Track
- [ ] DB configuration
- [ ] Order table in DB
- [ ] Implement logic for order table
- [ ] CRUD operation in order table
- [ ] Track order with uuid

## Instruction Backend

This backend is supported with SpringBoot.

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
- [springboot] (<https://spring.io/>)
