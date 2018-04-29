# Coding problem: Conference Track Management
- [The Problem](#the-problem)
- [The Solution](#the-solution)
## The Problem
You are planning a big programming conference and have received many proposals which have 
passed the initial screen process but you're having trouble fitting them into the time constraints 
of the day -- there are so many possibilities! So you write a program to do it for you. 

- The conference has multiple tracks each of which has a morning and afternoon session.
- Each session contains multiple talks.
- Morning sessions begin at 9am and must finish by 12 noon, for lunch.
- Afternoon sessions begin at 1pm and must finish in time for the networking event.
- The networking event can start no earlier than 4:00 and no later than 5:00.
- No talk title has numbers in it.
- All talk lengths are either in minutes (not hours) or lightning (5 minutes).
- Presenters will be very punctual; there needs to be no gap between sessions.  Note 
that depending on how you choose to complete this problem, your solution may give a 
different ordering or combination of talks into tracks. This is acceptable; you don’t need 
to exactly duplicate the sample output given here.

### Sample inputs:
|Lectures|Time|
|---|---|
| Writing Fast Tests Against Enterprise Rails |**60min** |
|Overdoing it in Python |**45min**|
|Lua for the Masses |**30min**|
|Ruby Errors from Mismatched Gem Versions |**45min**|
|Common Ruby Errors |**45min**|
|Rails for Python Developers |**lightning**|
|Communicating Over Distance |**60min**|
|Accounting-Driven Development |**45min**|
|Woah |**30min**|
|Sit Down and Write |**30min**|
|Pair Programming vs Noise |**45min**|
|Rails Magic |**60min**|
|Ruby on Rails: Why We Should Move On |**60min**|
|Clojure Ate Scala (on my project) |**45min**|
|Programming in the Boondocks of Seattle |**30min**|
|Ruby vs. Clojure for Back-End Development |**30min**|
|Ruby on Rails Legacy App Maintenance |**60min**|
|A World Without HackerNews |**30min**|
|User Interface CSS in Rails Apps |**30min**|
### Sample output:  
#### Track 1:
`09:00AM` Writing Fast Tests Against Enterprise Rails 60min\
`10:00AM` Overdoing it in Python 45min\
`10:45AM` Lua for the Masses 30min\
`11:15AM` Ruby Errors from Mismatched Gem Versions 45min\
`12:00PM` Lunch\
`01:00PM` Ruby on Rails: Why We Should Move On 60min\
`02:00PM` Common Ruby Errors 45min\
`02:45PM` Pair Programming vs Noise 45min\
`03:30PM` Programming in the Boondocks of Seattle 30min\
`04:00PM` Ruby vs. Clojure for Back-End Development 30min\
`04:30PM` User Interface CSS in Rails Apps 30min\
`05:00PM` Networking Event
#### Track 2:
`09:00AM` Communicating Over Distance 60min\
`10:00AM` Rails Magic 60min\
`11:00AM` Woah 30min\
`11:30AM` Sit Down and Write 30min\
`12:00PM` Lunch\
`01:00PM` Accounting-Driven Development 45min\
`01:45PM` Clojure Ate Scala (on my project) 45min\
`02:30PM` A World Without HackerNews 30min\
`03:00PM` Ruby on Rails Legacy App Maintenance 60min\
`04:00PM` Rails for Python Developers lightning\
`05:00PM` Networking Event

## The Solution
**Algorithm:** A variation of [Bin Packing Algorithm](https://www.youtube.com/watch?v=kiMFyTWqLhc) called `First Fit Decreasing` is used. It goes like this: 
- Sort The elements by decreasing order
- Get the First Element put it in the bin where it will fit
- Rinse and repeat

### Classes
This problem was solved using Object Oriented approach though JS doesn't support full-fledged OOP concepts like interfaces and whatnot .. um.. OOPsie Daisy (*horrible pun intended*)
#### Components
There are two components showing on the screen, the component which is bootstrapping the input and another which is the conference itself.
- `commandline.component` reads from the commandline and parses `arguments`. like `node src/app.js -u data/data.txt`, it will parse the arguments and actually ready the conference class.
- `conference.component` is the component which encapsulates all the controllers, services and models. The driver programs just passes argumensts to this component and starts it.

#### Models and Controllers
- *`activity.model`* and `activity.controller`, these two are the unit of this conference. Every activity like Talks, Lunch or Networking Event is controlled by them.
- `track.model` and `track.controller`, these two are the containers of activities. Conference is made of Multple tracks. Notable a pair of 2(morning and afternoon tracks)

#### Services and Utils
- `scheduling.service` <= this guy contains the actual `First fit decreasing` algorithm. Could have improved this by making it more generic. Certainly that's gonna be a `@TODO`
- `LectureParser` This badass util splits then input and returns a 2D array. The internal array containes two values, **0)** The actualy name of the Talk including the time. **1)** The time in mins as integer for easy sorting and stuff.

### Sample inputs:
```
node src/app.js -u data/data.txt
```
- check out [Data.txt](./tree/master/data/data.txt)], which is basically same as Sample Input in the Question section
### Sample outputs:
Track 1:  
`09:00AM` Writing Fast Tests Against Enterprise Rails 60min  
`10:00AM` Ruby on Rails Legacy App Maintenance 60min  
`11:00AM` Ruby on Rails: Why We Should Move On 60min  
`12:00PM` Lunch  
`01:00PM` Communicating Over Distance 60min  
`02:00PM` Rails Magic 60min  
`03:00PM` Ruby Errors from Mismatched Gem Versions 45min  
`03:45PM` Pair Programming vs Noise 45min  
`04:30PM` Lua for the Masses 30min  
`05:00PM` Networking Event  
  
Track 2:  
`09:00AM` Accounting-Driven Development 45min  
`09:45AM` Common Ruby Errors 45min  
`10:30AM` Clojure Ate Scala (on my project) 45min  
`11:15AM` Overdoing it in Python 45min  
`12:00PM` Lunch  
`01:00PM` Woah 30min  
`01:30PM` A World Without HackerNews 30min  
`02:00PM` Programming in the Boondocks of Seattle 30min  
`02:30PM` Ruby vs. Clojure for Back-End Development 30min  
`03:00PM` User Interface CSS in Rails Apps 30min  
`03:30PM` Sit Down and Write 30min  
`04:00PM` Rails for Python Developers lightning  
`05:00PM` Networking Event  
