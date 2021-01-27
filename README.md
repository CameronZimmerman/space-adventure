# Space Adventure plan

## HTML 
- Home 
    - form for user info
        - Get users name
        - Get user attribute
        - Start adventure button
        - p with discription
- Solar System
    - container for links(planets)
    - ul to contain links
- Dispute
    - Heading
    - Planet background image   
    - Super power leader img
    - discription of planet dispute that needs advising
    - form element to attach question radio buttons to
- Results
    - something to display story text
    - restart game button.

## JS

- -1) message data model
    - sanity messages
        {
            sane: "you've got a pep in your step and a positive outlook on life",
            troubled: "you've got a few loose screws",
            insane: "you can no longer cope with reality and could no longer bear the pain of living"
        };

    - lives extinguished 
        {
            none: "",
            moderate: "",
            extreme: ""

        };

- 0) User data model
    
- 1) Create dispute data model and data.js
[
   {id: ""
    title : "",
    description: "",
    leader: "leader1.png",
    planet: "planet1.png"
    top: 50%,
    left: 50%,
    completed: false,
    options: [
        {   
            optionId: "",
            background: "planetBg1.png",
            text: "Tell them to go ahead and press the nuke button",
            result: "War is declared, leading to planetary extinction",
            //how it affects users data
            extinguishedLives: 1000000000,
            planetsSaved: 0,
            anguish: 5
        },
        etc,
        etc,
        etc,
    ],
   },
   etc,
   etc,
]

- 2) Home.js
    - grab form
    - add event listener
        - on submit ->
            - set user into localStorage
                - setUser()
                - getUser()
                - updateUser()
             - redirect to solarSystem page

- 3) solarSystem.js
    - grab ul
    - grab disputeData from data.js
    - check and see if all quests are complete/anguish > 10 ->
        - redirect to results page
    - else ->
        - loop through all disputes
        - create li
        - create image
            - img src = `../assets/${dispute.planet}`
            - append img to li
        - check if completed ->
            - create a
                - href = `../quest/?id=${dispute.id}`
            - append li to a
            - append a to ul
        - else ->
            - append li to ul

- 4) quest.js
    - grab url gobledegook
    - grab dispute based on id in gobledegook
    - grab dispute dom elements
    - grab submit answer button
    - populate elements with data based on our particular dispute
    - add event listener to submit answer button
        - on click show alert with dispute option result
        - direct them back to solarSystem page

- 5) results.js
    - check user data and return a key based on how they did
        - getAttrocities
        - getAnguish
    - return and display message based on key
        - check stats against eachother and say weather they were a good or evil person.


