initial thoughts
    -I want this project to the the culmination of what I learned about React for the past month (may1 - june1)
    -Although there were 2 whole weeks where I focused on studying for finals and machine learning and networks, I still consumed contents regularly about React
    -That is why I will record my first month of front-end webdev in this project
    -I have learned the basics and now am planning to combine all that I have learned into one project to solidify my understanding.

Project Goal
    -To build something with all the tools that I have learned throughout the pass month
    -Build a basic producivity app that will allow me to switch between the following functionalities: 
        1) todo list
        2) stop watch
        3) timer
    -The end goal is to learn and experience what It means to build something from scratch without using tutorial


"Think-along" of the project
    - was planning to use the sidebar componenent I had learned to keep track of different functionalities of the app
    - I ran into a problem where I think I should refactor the codebase already
        - since the app can be split into 2 main components, the sidebar and the main contents, I should create a wrapper for the 3 functionalities

    - So the main content will do the switching between the different functionalities
        - wow that means I have to adjust the css
        - the problem could have been prevented if I did not use App.jsx as my root element
        - Now i need to pass the classNames as the props for the components which are new concepts that I have not learned yet.
    - finished with the stop watch functionality of the app
        - I have some regrets about the styling of the stop watch
        - It honestly feels too rushed an too barebones. We may need to update the design later
    - starting on the Timer functionality now
        - finished with the timer fucntionalities
        - honestly, I rushed through the design and the functionalities process
        - felt like I could have spent more time fine tuning
        - but this was just a project review and prove to myself I can build an app

    - todo-list
        - there is a refactor that I should do, i should wrap the entire container in the li tag
            - better readability and more functional
        - again, the goal of this part Is not to re-invent the wheel or make a fancier wheel
        - I just wanted to get the core functionalities of the state management down so I can move on to the harder concepts
        - After using the ul and li tags and messing with the .map() method, I have a better graps of the concepts so far
        - "Enter" functionality
            - CORE-FUNCTION: so everytime we hit enter, we add a new task into the taskArray
            - SANITY-CHECKS: 
                                1) make sure to only add to the list once the our input field is typed out
                                    - use trim to see of the input field is empty or not (research more)
            - IMPLEMENTATION DETAILS:
                                1) When adding a new task it will be the top priority, meaning it should be in taskArray[0] - acts like a stack kind of
            - PROBLEMS DURING DEV:
                                1) there is a style issue with how the inserted task will change the width of the list element
                                    - SOL - ignore it
        "Done" functionality:
        - CORE-FUNCTION: Once i hit the Done button, the task will be removed from the taskArray, effectively removing it from our display
        - SANITY-CHECKS:
                                1) None
        - IMPLEMENTATION DETAILS:
                                1) Using the .filter method for arrays
                                    - creates a new array with a boolean condition
        - PROBLEM DURING DEV:
                                1) NONE

CONCLUSION: Now that I have finished the project, there are a couple points I would like to reflect on. First off, although the core functionalities of the project works as intended, there are some styling issues that would reduce the user experience. The sidebar changing the position of the current-application when extended for example, shows an incomplete understanding of css and the need for further refinement. Second, there are shortcuts that were taken when creating the functions that govern the logic of the apps. The Timer display for example, showed minutes and seconds only, which is horrendous for user experience. Overall, this was a good learning experience and had allowed me to level up a bit as a developer by making me think more about the architecture of the codebase.