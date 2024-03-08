const pollDatas = [
    {
        id: 1,
        optionsType:"multiple",
        question: "What is your preferred work environment?",
        options: [
          { id: 'A', text: 'In a large, crowded office.' },
          { id: 'B', text: 'In a quiet workspace' },
          { id: 'C', text: 'Virtually with a team' }
        ],
        results: { A: 0, B: 0, C: 0 }
      },
      {
          id: 2,
          optionsType:"multiple",
          question: "What do you look for in a job?",
          options: [
            { id: 'A', text: ' Good pay.' },
            { id: 'B', text: 'strong mission.' },
            { id: 'C', text: 'Opportunities for growth' }
          ],
          results: { A: 0, B: 0, C: 0 }
        },
        {
          id: 3,
          optionsType:"single",
          question: " What do you want to achieve in your career?",
          options: [
            { id: 'A', text: 'Be the best at what I do.' },
            { id: 'B', text: 'Grow in my career' },
            { id: 'C', text: 'Get promoted' },
            { id: 'D', text: 'Others' }
          ],
          results: { A: 0, B: 0, C: 0, D:0 }
        },
        {
          id: 4,
          optionsType:"single",
          question: " What do you want to achieve in your career?",
          options: [
            { id: 'A', text: 'Be the best at what I do.' },
            { id: 'B', text: 'Grow in my career' },
            { id: 'C', text: 'Get promoted' },
            { id: 'D', text: 'Others' }
          ],
          results: { A: 0, B: 0, C: 0, D:0 }
        }
]

export default pollDatas