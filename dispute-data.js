const disputeData = [
    {
        id: 'kidnapping',
        description: 'That son of a biscuit Gorkoo Natissi has kidnapped my daughter and is holding her randsom for 26,000,000 oblks. If this isn\'t resolved soon I think I may do something rash... what would you advise?',
        leader: 'leader1.png',
        top: 25,
        left: 62,
        options: [
            {
                optionId: 'pay',
                text: 'you should pay the ransom... your daughter is what is most important',
                result: 'your client payed the ransom and got his daughter back. This show of weakness leads to a coup causing thousands of lives',
                extinguishedLives: 10000,
                evil: 0,
                anguish: 1

            },
            {
                optionId: 'take',
                text: 'What Gorkoo and his men have done is wrong, and you can\'t let it stand, send in the troops to take her back',
                result: 'your client sent in his men to take his daughter back by force. Planetary civil war ensues, the nukes are dropped and everyone is dead',
                extinguishedLives: 8000000000,
                evil: 1,
                anguish: 5         
            },
            {
                optionId: 'negotiate',
                text: 'I don\'t think you should give in to Gorkoo\'s terms. See if you can call a meeting with him to "discuss things"',
                result: 'your client has called a meeting with Gorkoo, but brings all of his troops. His willingness to discuss and show of force intice Gorkoo to return your client\'s daughter in exchange for a lesser reward',
                extinguishedLives: 0,
                evil: 1,
                anguish: 0       
            }
        ]
    },
    {
        id: 'war',
        description: 'I have decided it is time to end the century long civil war that has been raging on my planet, but I need a good way to end it all for good...what would you advise?',
        leader: 'leader2.png',
        top: 53,
        left: 22,
        options: [
            {
                optionId: 'force',
                text: 'You should end it all with one final barage of nuclear bombs',
                result: 'as you advise, your client nukes the other side to smitherines. The war is ended, but at what cost?',
                extinguishedLives: 60000000,
                evil: 5,
                anguish: 2

            },
            {
                optionId: 'treaty',
                text: 'You should call a meeting to discuss a peace treaty',
                result: 'your client calls a peace treaty, and when both leaders meet things go sour. Both call in the nukes and destroy the entire planet all at once.',
                extinguishedLives: 8000000000,
                evil: 0,
                anguish: 5         
            },
            {
                optionId: 'poison',
                text: 'You should send them a poisoned pie... no one can resist a delicious pastry',
                result: 'your client sends the enemy leader a poisoned boysenberry pie. little did you know the enemy leader is immune and misjudges this murderous act as an act of kindness, ending the war',
                extinguishedLives: 0,
                evil: 3,
                anguish: 0       
            }
        ]
    },
    {
        id: 'inheritance',
        description: 'I am over 1300 years old and have ruled this planet for almost all my life. My time is coming to an end and I must pass the torch ...what would you advise?',
        leader: 'leader3.png',
        top: 12,
        left: 62,
        options: [
            {
                optionId: 'first',
                text: 'you should make your first born the leader, I am sure they\'re a good kid',
                result: 'after living a long and spoiled life your client\'s child is not equipped with the skills to lead, running the country into the ground. Society devolves into warring city states',
                extinguishedLives: 100000,
                evil: 1,
                anguish: 3

            },
            {
                optionId: 'whatever',
                text: 'you should\'t do anything, who cares you will be dead. They will figure it out',
                result: 'your client dies and leaves no instruction as to who should take the throne. Thousands of insurgents fight their way to the capital to take the throne. This creates a 1000 year chain of usurping',
                extinguishedLives: 8000000000,
                evil: 5,
                anguish: 2         
            },
            {
                optionId: 'vote',
                text: 'You should tell the people you will be holding a planet wide vote, and have them elect a leader',
                result: 'your client dies, but the people elect a fine leader from a small farming town with a background in agricultural sciences.',
                extinguishedLives: 0,
                evil: 0,
                anguish: 0       
            }
        ]
    }
];

export default disputeData;