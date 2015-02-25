# qtapp
# bojan kucera

Main Tools Used:
Gulp
Bower
Yeoman
Gulp-Angular-Generator
Angular-Materials for UI

A lot of the App was generated using yeoman. After the first generation I commited the initial project to github so it will be easier for you guys to see what I have actually worked on. The Repo can be found here https://github.com/bojank/qtapp

I decided to try out Angular-Materials for this projects and really enjoyed played around with it and the power it provides to make a nice UI easily. You will notice its power on the Add/Edit Page.

I decided to mock the Person Service and crate it to mimic the promise way of doing things.

For my custom directive I decided to make a phone parser/formatter (src\components\directives)

I also created a number of unit tests for the person controller and also a few e2e tests for the list and create / edit pages.

To run the solution:

npm install
bower install
gulp serve 			# to view
gulp test 			# to run jasmine tests
gulp protractor 	# to run e2e tests