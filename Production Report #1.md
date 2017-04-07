## Production Report #1


###Project Summary
**Nudge**, is a personal assistant app that helps make adulting easier by having a pre populated list of reminders and curriculum curated to your lifestyle. Own a car? Get yearly reminders to change your oil. Want to save money in an adult way? Get reminders to contribute to savings/retirement account. Are you overwhelmed with what it means to be an adult? Don’t worry Nudge has your back and can provide information and service suggestions to get you started.

###Platform and Technical Information

#####Infrastructure
AWS EC2 Instance.



#####Database

After consider three database options. We decided to implement MongoDB for our backend solution.

######Benefits include:

- NonSqL
- Uses JSON datatypes
- Scalable
- Encrypted transmission and storage

More information can be found on [MongoDB] (https://www.mongodb.com/manual)'s website.

Steps for create MongoDB on AWS ([link](https://aws.amazon.com/blogs/aws/mongodb-on-the-aws-cloud-new-quick-start-reference-deployment/).

#####Nudge Objects

The objects that we will be using for our application will be created with JSON and stored on Mongo, all being hosted on Amazon Web Services. Each object will consist of the main parent category (such as finances, medical, work, etc.) that will then be broken down into subcategories, including the tasks involved with that parent category. Below is an example of what the template for what our objects may look like:

	- Parent Category:
		- Description
			- Show more
			- Tasks
		- Description (toggle)
			- Show more
			- Reminder
			- Suggestions (toggle)
			- Notes
			- (HIDDEN)
				- TAGS
		- ...
			- ...
		- Crowd Suggested tasks
    -  Create own task

####Prototyping

- [LucidChart](https://www.lucidchart.com/)

#####Development

- [Ionic (mobile app framework)](https://ionicframework.com/)

###GitHub Repository
Our live github repository can be found [here](https://github.com/mnmckenn/Nudge).

###Table of Functionality
Below is a screenshot as of the time of this assignment submission.

![](Screen cap of Waffle.io)

Realtime functionality tracking can be found either on [Github](https://github.com/mnmckenn/Nudge/issues) or on [Waffle.io](https://waffle.io/mnmckenn/Nudge)


###Next Steps
Next week we will be focusing on:

-


##Nudge Problem space research

There are over 75.4 million Millennials in America. As millennials navigate the transition to adulthood Nudge is there to help them with adulting. Adulting is:
>1. to behave in an adult manner; engage in activities associated with adulthood
2. to make someone behave like an adult; turn someone into an adult”. Adulting is also a new and popular phenomena (see graphic).

![alttext](/adulting.png)

Several self-help books, courses, and services have sprung up around the theme of teaching one how to adult. However, there is no simple app to help one with the tasks and help young-adults with their individual needs. This is where nudge comes in to help the user with guides and action plans for  a handful of adulting specific tasks personalized for the user.

Nudge’s objective is simple: help millennials with adulting. Nudge’s focus will be to hone in a few major key challenges millennials face and make them painless. This process will be delightful and painless way.

Based on current research on what young-adults struggle the most with there are three-main themes: financial management, health care management, and general self-help.

#Next week

Over the next one-week sprint I will hone out exactly what tasks in those 3-problem spaces are the best fit for the app nudge. There will be 3-5 specific tasks that the app can do that'll help the user with adulting.
