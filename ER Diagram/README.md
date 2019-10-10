# ER Diagram for Outdoor Climb
<img src="https://imgur.com/mr21bhS" width=900 hspace="10">


# Data Model Explanations

## Entity Sets:
* User is an entity that we created since our application needs to keep track of different emails, passwords, and names for each account.
* Comments is a weak entity set that relies on a user to exist. A comment consists of the date it was written and the text belonging to it
* For each user, there are some that are also an Explorer who is a user but has some extra permissions such as being able to create routes and update information. However, with this responsibility, information such as phone number and address should be documented to ensure proper information. 
* Park is an entity set that is identified by its name and has information about its location and the different rocks in a park.
* Rock is a weak entity set that is identified by its name and park name since there can be multiple different rocks given the same name. There can be multiple routes per rock but must point to at least one route to be valid in this application.
* Route is an entity set that contains all the information that our application seeks to provide. It’s main identifier is its name, and its other attributes contains information about its description, location, protective equipment, pictures, rating, and difficulty grade.
* Boulder is a type of route with its own path to designate its corresponding path
* Sport is another type of route with bolt locations to indicate where the climber will secure his/her rope. The bolts are fixed. It will also have at least one pitch.
* Traditional is a type of route that has more variability and does NOT come with predefined bolts. Traditional climbing requires gear so there is a recommendation for the types of gear to bring. Because there is more variability in traditional climbing since there are no predefined bolts there is a general route path for the route. It will also have at least one pitch.
* Pitch is one section of the route. Boulders are short climbs and thus do not have pitches. Tradition and sport climbing routes may be very long and thus may be separated into multiple sections. Each pitch will be measured in feet, belong to a certain route, and its pitch number (index) in the route because a route will have many pitches.
* Picture is an entity that has an attribute of a picture of a route, the route its supposed to be a picture of, and the poster (who is supposed to be a user)


## Relations:
* User will have an Email, a Full Name, and Password. User will be identified by their Email (key attribute).
* User will be able to write Comments.
* Comments will include Author, Text, Date Written and Route. Comments will be strictly identified by author, date written, and route.
* If the User is classified as an Explorer, the User will have to register an Address and Phone Number. Explorer will have extra permissions by being assigned as an Admin to a route.
* A Park will have a Name and Location. Park will be identified by the Name (key attribute).
* Park will have at least one Rock that will be identified by its Name (key).
* Rock will have at least one Route.
* Route will have a Location, Rating, Grade, Name, Description, and Protection Equipment. Route will be identified by its Name (key). User will be able to choose a Route based on those attributes.
* Route displays 0-1 Pictures
* Picture will have a Poster and Photo Data. Picture will be identified by Photo Data (key). Picture will display the Routes.
* Boulder, Spot, and Traditional are all types of routes with their own unique attributes and relations
* Both Spot and Traditional may have one or many Pitch entities 

## Tuples
- Park(name: Yosemite National Park, location: California)
- Rock(name: Southwest Face)
- Route(name: The nose, description: This is the description and how to do it, location:From El Capitan Meadow cross road, routeID: 89fugd0g9e0, rating: 4/5, grade:5.9)
- Trad(Gear Recommmendation: two or three sets of cams, number of pitches: 31)
- Pitch(Pitch length in feet:100 ft, pitch number: 2)
- User(email: email@email.com, name: Jon John, password: 89fs899h)
- Explorer(address: , phone number: )
- Comment(Text: “Hello world”, Author: Jon john, Route: , Date written: 5/5/5)

