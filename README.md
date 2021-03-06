## Setup

From your challenges directory, run the following:

```
$ npm install
$ npm start
$ ruby 'server.rb'
```

## Instructions

In this exercise you're going to be creating a custom greeting generator using React Router.
There will be a default greeting and default goodbye component that will have default
messages. There is also a custom greeting generator component that allows a user to insert a
name and choose whether the message is a greeting or a goodbye.

1. Familiarize yourself with the different sub-apps (`Greeting`, `Goodbye` and 
`CustomizedGreeting`) you'll be rendering in the app folder. These pieces of the application 
will form the different sections of your greeting generator. Note that the `Form` is a 
component rendered within the `CustomizedGreeting` component to get user input.

2. Create a Router in App that renders the `Greeting`, `Goodbye` and `CustomizedGreeting` 
components at appropriate Routes. They do not need to be nested routes.

3. Now we will refactor. Often sites have a navigation bar at the top with links to the 
various sections of the website.

	Creating such a nav bar using React Router links can be a very powerful way to provide a 
	good user experience for your single page app by allowing the user to easily move through 
	your site. Create a `Dashboard` Component with React Router Links that link to the different 
	pages in the app from each page. Just like a nav bar, there should be a link to each section
	of the web application.

4. Next, refactor the Routes in the Router to allow the same nav links to appear at the top 
of each page using nested Routes. This will involve making sure the three main sub-apps 
`Greeting`, `Goodbye` and `CustomizedGreeting` are hooked up correctly to the new Dashboard.

## Bonus Challenges

1. Let's be honest, right now this site looks terrible. Smooth navigation using something 
like React Router is only part of a good User Interface. No one is going to get excited about 
this plain background and plain text. Use what you've learned so far about CSS and styling 
during the Front End Week to make this app something you'd actually want to show people.

2. Make a presentational component that turns the `CustomizedGreeting` into a greeting card 
look alike.

3. Refactor the `CustomizedGreeting` component so that it can take in multiple names. 
