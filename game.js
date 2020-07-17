const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions =[
    {
        question: 'George Smith was murdered on Sunday evening. There were 4 other people in his house: Mr. Smith’s wife, his personal cook, a housemaid, and a gardener. They all told Detective Stevens what they were doing that evening',
        choice1: 'The cook was making breafast',
        choice2: 'the gardener was watering plants in the greenhouse',
        choice3: 'the housemaid was washing dishes',
        choice4: 'Mrs.smith was reading a book nea a fireplace',
        answer:   1

    },
    {
        question: '4 friends regularly visited the sauna together. They always brought something with them. Jack, a musician, took an iPod with him to listen to music. Steve, a banker, took a thermos to drink out of. Patrick and Michael were lawyers and took documents to read.One day, Patrick was found dead. He was killed by a sharp object. Policemen came immediately and conducted an investigation. They found nothing.',
        choice1:  'micheal',
        choice2:  'jack',
        choice3:   'steve',
        choice4:  'patrick',
        answer: 3

    },
    {
        question: "A game set has gone missing from the classroom. Mr Robert called up 4 pupils and interviewed them. Only one of them is telling the truth. These are the statements",
        choice1: 'Alice: I did not take the game set.',
        choice2: 'David: I think Bob took the game set.',
        choice3: 'Bob: Alice is lying.',
        choice4: 'Carol: Bob is lying',
        answer: 1

    },
    {
        question: 'A man placed a $100 dollar bill on his desk and left for work. When he returned back the money was gone. He has three suspects: the cook, the maid and the electrician',
        choice1: 'The cook said he put the bill under a book on his desk to keep it safe. The man checked and it is no longer there.',
        choice2: 'The maid said she moved the bill to the inside of the book between page 1 and 2 while she was cleaning. Again, the man checked the book and there was nothing between page 1 and 2',
        choice3: 'The electrician said he saw the bill sticking out of the book and he moved it between page 2 and 3 to keep it safe',
        choice4: ' ',
        answer: 3

    },
    {
        question: 'It was the first day of school when a young girl was found dead in the classroom. Police had identified four suspects',
        choice1: 'The Dean claimed that he was in his office the whole day',
        choice2: 'The Maths teacher claimed that she was giving the midterm exam results to her students.',
        choice3: 'The clerk claimed that he was bringing the mails.',
        choice4: 'The janitor claimed that he was cleaning the toilet on the first floor.',
        answer: 2

    },
    {
        question: 'Three spies, suspected as double agents, each make a statement. Assuming that moles lie, other agents tell the truth, and there is just one mole among the three, who is the mole?',
        choice1: 'Bertie: Cedric is a mole',
        choice2: 'Cedric: Bertie is lying.',
        choice3: 'Albert: Bertie is a mole.',
        choice4: ' ',
        answer: 1

    },{
        question: 'A man got killed in his office. The suspects are Edison, Jason, Janna, Sofia. A calendar near the man has blood, written 6, 4, 9, 10, 11. Who is the killer?',
        choice1: 'Patrick',
        choice2: 'Edison',
        choice3: 'Janna',
        choice4: 'Jason',
        answer: 4

    },{
        question: 'Melissa, Jessica, Sandy and Nicole were working on the computer. Suddenly, a crash and then lots of shouts. you rushed in to find out what was going on, finding the computer monitor on the ground, they each make a satement but only one is telling the truth who broke teh monitor',
        choice1: 'Nicole said, “Sandy’s a liar.”',
        choice2: 'Sandy said, “It was Nicole!”',
        choice3: 'Jessica said, “It wasn’t me!”',
        choice4: 'Melissa said, “No, it was Sandy!”',
        answer: 3

    },{
        question: 'A man is found dead one Saturday morning. He was killed while his wife was sleeping. The wife tells the police all that she knows. She tells them that the cook was cooking breakfast, the maid was cleaning and the butler was getting the mail. who did it',
        choice1: 'the wife',
        choice2: 'the butler',
        choice3: 'the cook',
        choice4: 'the maid',
        answer: 1

    },
    {
        question: 'An old man lives alone in a flat. Because of his old age, delivered to his home. On Friday while delivering the mail, the postman looked inside through the key hole and he saw a blood filled body of the old man, On the outside of flat they found two bottles of warm milk, Tuesday newspaper and some unopened mails, who killed teh man',
        choice1: 'the old man son',
        choice2: 'the post man',
        choice3: 'the milk man',
        choice4: 'the mail man',
        answer: 4

    },
    {
        question: 'Every day, a man crosses the border of Mexico on a bicycle with two bags of sand. The custom officers check his bags and they are full of sand. The custom officers are aware that he is smuggling something but are not sure what is it exactly. As they do not have any evidence, they let him cross the border. What is he smuggling?',
        choice1: 'hats',
        choice2: 'bikes',
        choice3: 'sand',
        choice4: 'cocaine',
        answer: 2

    },
    {
        question: 'Mr.James was found dead in a room without windows and with the only door being locked – and only 4 people had a key. When they were questioned, they gave the following accounts who killed him',
        choice1: 'John the butler: “When I heard the scream, I ran into the room, turned on the light and saw Mr. James with a knife in his neck.”',
        choice2: 'Sarah the governess: “I rushed up alongside John; when he turned on the light, the room was all bloody.”',
        choice3: 'Sophia the maid: “I came to wake up Mr. James; when I saw him dead, I screamed!”',
        choice4: 'Jack the cook: “I was prepping breakfast and didn’t see anything.”',
        answer: 3

    },
    {
        question: 'The Smith family is a very wealthy family that lives in a big, circular home. One morning, Mr. Smith woke up and saw a strawberry jam stain on his new carpet. He figured out that everyone who was there that morning had a jam sandwich. From the following statements, figure out who spilled the jam',
        choice1: 'Billy Smith: “I was outside playing basketball.”',
        choice2: 'The Maid: “I was dusting the corners of the house.”',
        choice3: 'Chef: “I was starting to make lunch for later.”',
        choice4: 'Mr Smith',
        answer: 2

    },
    {
        question: 'A Japanese ship was en route in the open sea. The Japanese captain went for a shower removing his diamond ring and Rolex watch on the table. When he returned, his valuables were missing. The captain immediately called the four suspected crew members and asked each one where and what he was doing for the last 15 minutes.        ',
        choice1: 'The Filipino cook in a heavy overcoat said, “I was in fridge room getting meat for cooking.”',
        choice2: 'The British navigation officer said, “I am on night watch, so sleeping in my cabin.”',
        choice3: 'The Indian Engineer with a torch in hand said, “I was working on generator engine.”',
        choice4: 'The Sri Lankan seaman said, “I was on the mast (top of the ship) correcting the flag which was upside down by mistake.”',
        answer: 4

    },
    {
        question: 'what is the capital of australia',
        choice1: 'sydney',
        choice2: 'canberra',
        choice3: 'melbourne',
        choice4: 'perth',
        answer: 2

    }
]

const CORRECT_BONUS =10;
const MAX_QUESTIONS =5;

startGame = () => {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    progressText.innerText = `Casefile#RHSD0${questionCounter}F319`;

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            increamentScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( ()=>{
            selectedChoice.parentElement.classList.remove(classToApply);

            getNewQuestion();  
        }, 1000);
       
    });
});

increamentScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
