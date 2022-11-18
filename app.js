const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const JeopardyofdeathCategories = [
    {
        genre: 'WHO',
        questions: [
            {
                question: 'Who wrote Harry Potter?',
                answers: ['Jk Rowling', 'JRR Tolkien'],
                correct: 'JK Rowling',
                level: 'easy'
            },
            {
                question: 'Who was born on Kyrpton',
                answers: ['Aquaman', 'Superman'],
                correct: 'Superman',
                level: 'medium',
            },
            {
                question: 'Who designed the first car?',
                answers: ['Karl Benz', 'Henry Ford'],
                correct: 'Karl Benz',
                level:'hard',
            },
        ],
    },
    {
        genre: 'WHERE',
        questions: [
            {
                question: 'Where is Buckingham Palace?',
                answers: ['Richmond', 'London'],
                correct: 'London',
                level: 'easy'
            },
            {
                question: 'Where is the Colosseum?',
                answers: ['Rome', 'Milan'],
                correct: 'Rome',
                level: 'medium',
            },
            {
                question: 'Where is Mount Kilamanjaro?',
                answers: ['Zimbabwe', 'Tanzania'],
                correct: 'Tanzania',
                level:'hard',
            },
        ],
    },
    {
        genre: 'WHEN',
        questions: [
            {
                question: 'When is christmas?',
                answers: ['30th Dec', '24th/25th Dec'],
                correct: '24th/25th Dec',
                level: 'easy',
            },
            {
                question: 'When was JK Shot?',
                answers: ['1963', '1961'],
                correct: '1963',
                level: 'hard',
            },
            {
                question: 'When was WW2?',
                answers: ['1932', '1941'],
                correct: '1941',
                level:'medium',
            },
        ],
    },
    {
        genre: 'WHAT',
        questions: [
            {
                question: 'What is the capital of Saudi Arabia?',
                answers: ['Jeddah', 'Riyadh'],
                correct: 'Riyadh',
                level: 'hard',
            },
            {
                question: 'What do koalas eat?',
                answers: ['straw', 'Eucalypt'],
                correct: 'Eucalypt',
                level: 'medium',
            },
            {
                question: 'What is a kg short for?',
                answers: ['kilojoule', 'Kilogram'],
                correct: 'Kilogram',
                level:'easy',
            },
        ],
    },
    {
        genre: 'BOB',
        questions: [
            {
                question: 'what is bob?',
                answers: ['Demon', 'Sleep demon'],
                correct: 'Sleep demon',
                level: 'easy',
            },
            {
                question: 'What is bobs favorite color?',
                answers: ['Black', 'Pink'],
                correct: 'Black',
                level: 'meduim',
            },
            {
                question: 'How old is bob?',
                answers: ['13', '130,000'],
                correct: '130,000',
                level:'hard',
            },
        ],
    },
]


function addCaTegory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const row = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === 'easy') {
            card.innerHTML = 100
         }
         if (question.level === 'medium') {
            card.innerHTML = 200
         }
         if (question.level === 'hard') {
            card.innerHTML = 300
         }

         card.setAttribute('data-question', question.question)
         card.setAttribute('data-answer-1', question.answers[0])
         card.setAttribute('data-answer-1', question.answers[1])
         card.setAttribute('data-correct', question.correct)
         card.setAttribute('data-value', card.getInnerHTML())


    })


}

JeopardyofdeathCategories.forEach(category => addCaTegory(category))




