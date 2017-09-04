Introduction to the site and general information:
-------------------------------------------------

I tried to use everything that we learned in the Full Stack Web Development Course provided by HKUST in my project.

Used: HTML, CSS, JavaScript, JQuery, Bootstrap 4.0, AngularJS, NodeJS, MongoDB, RESTful API, Git, NPM, FontAwesome, Bower, AxureRP Prototyping

You may take a look at the early version of SUR+ and its prototype in "/Prototype SUR+". Since then major changes had been made as I began to realize that an exceedingly complicated procedure to make the front end of the finished product look like that, and I quite frankly hadn't the time to spend so long on it.

In Documentation help you'll find my list of handy commands I made for myself some time ago.




Setting up the website:
-----------------------



Download the repositoty from GitHub -> https://github.com/HyperDroids/SUR-.git
Find a suitable location for you to save the website. Once you've downloaded the repository,
make sure you have NPM, bower and node globally installed. Then do git bash "bower install" as well as "npm install"

This will make sure that any of the plugins I had used will be downloaded for you to use.

Make sure you have MongoDB installed, and add a database (db) by the name of "rest-commerce", and a collection to it named "items".

This will set up the Database. I suggest using Postman or RESTEasy to test and make sure it's working. Next add some random items to the "items" collection.





Hosting the site:
-----------------

To do so, if not opened already, open mongod.exe followed by mongo.
Then from the "/SUR+" folder, git bash the following: node app.
Then both client and server should be running.
