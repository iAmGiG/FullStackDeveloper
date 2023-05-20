# High-level-View

The app is based on MVC (model-view-controller) architect. The main function of the app is to perform CRUD operation.

The user must be able to view the menu, choose items (that will then be saved in postgresdb), and track order.

## Architecture

  USER ----> API ---> DB

  : Keep it simple and practical

## FrontEnd

The frontEnd or UI is the main page the user interacts with. The main parts are: title, hyperlinks, color-background.

The hard part will be the interaction with database.

## Issues

P1. Currently the hyperlink is using hardcoded path for the order values. Dev needs to make it dynamic or figure out how this will work in prod setting.

P2. the menu has listed the names of items. Dev requires to make a pop out box (some form) which will contain the information about the burger item. HTML doesn't have the advance feature of pop ups. This will
require another framework.

### VS code bits

* Using format helpers to ensure code is linted properly, including but not limited to:
  * HTML Snippets
  * HTML Validate
  * Markdown editor
  * Markdown all in One.

