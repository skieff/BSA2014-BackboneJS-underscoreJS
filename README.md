===============================
##Hometask boilerplate for JS group after Backbone lecture.

###What should be done?


####V6

Rewrite application using backbone/thorax.

####V5

Use such backbone plugins:
- Local storage for change history
- fetch-cache for caching film details
- memento to store model states (add ability to revert film state)
- validation - to validate created films

####V4

- Complete previous task using Marionette.js meta-framework. ItemView, CollectionView, CompositeView components should be used.
- Region component should be used to switch between films list and film details.
- Behaviour should be added to change film container or films list container style on hover (for example, border should be added)

####V3

- Add support for Jade instead of HTML and Stylus instead of CSS to current project.
- Convert all modules to AMD.
- requirejs should be used to request single js file.
- Use grunt to run jshint on project source

####V2

- Add possibility to add films.
- Add possibility to rename films.
- Add possibility to remove films.

You should add a button for remove and add action.

Rename can be done within on the same place, where now sits plain text with the name or in a separate place.
Add implies inputs for name and year, id may be generated automatically.

On item click, view should be changed to display film details with 'back to the list' button.
Routing should work so that copying link and openning in new tab should open the same view you are in.

BSA2014-BackboneJS-underscoreJS

###How to start the server
- Install the [node.js](http://nodejs.org/)
- Clone this repository
```shell
git clone git@github.com:msemenistyi/BSA2014-BackboneJS-underscoreJS.git
``` 
- Go to folder
```shell
cd BSA2014-BackboneJS-underscoreJS/
```
- Install all the dependencies
```shell
npm install
```
- Run the server
```shell
node app.js
```
- Go to browser and check the API.
```
localhost:3000
```
