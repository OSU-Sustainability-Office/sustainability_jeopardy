import Vue from 'vue'
import Vuex from 'vuex'
import Question from './question.js'
import Answer from './answer.js'

Vue.use(Vuex)

const store = {
  state: {
    categories: [
      {
        name: 'Sustainability at OSU',
        questions: [
          // An array of question objects. Refer to question.js
          new Question(
            'What is the main focus of the EcoReps?',
            [
              new Answer('All of these!', true),
              new Answer(
                'Educating residents about sustainability topics',
                false
              ),
              new Answer(
                'Assisting with marketing of sustainability programs',
                false
              ),
              new Answer('Planning sustainability-focused events', false)
            ],
            100
          ),
          new Question(
            "OSU's three green certifications contain simple yet effective ways for the OSU community to further its sustainability efforts and get recognition for its hard work. How many offices have been certified?",
            [
              new Answer('21', true),
              new Answer('34', false),
              new Answer('12', false),
              new Answer('58', false)
            ],
            200
          ),
          new Question(
            'How many tons of CO2e have been offset since the beginning of the Carbon Travel Offsets program in 2019?',
            [
              new Answer('30.15', true),
              new Answer('50.32', false),
              new Answer('130.2', false),
              new Answer('250.3', false)
            ],
            300
          ),
          new Question(
            'How many credits does it take to complete a Sustainability Double Degree at OSU?',
            [
              new Answer('32', true),
              new Answer('120', false),
              new Answer('67', false),
              new Answer('80', false)
            ],
            400
          ),
          new Question(
            'The OSU Path to Carbon Neutrality outlines and prioritizes actions OSU must take to achieve carbon neutrality in 2025. Which of the following are actions included in the Path to Carbon Neutrality?',
            [
              new Answer('All of them', true),
              new Answer('Improve Existing Building Efficiency', false),
              new Answer('Engage University Community', false),
              new Answer('Decarbonize Major Capital Projects', false)
            ],
            500
          )
        ]
      },
      {
        name: 'Energy',
        questions: [
          // An array of question objects. Refer to question.js
          new Question(
            'What is the most efficient type of light bulb?',
            [
              new Answer('Light-Emitting Diode (LED)', true),
              new Answer('Compact Fluorescent Light (CFL)', false),
              new Answer('Incandescent', false),
              new Answer('Dihydrogen Monoxide Filament (DMF)', false)
            ],
            100
          ),
          new Question(
            'What is the biggest use of energy in a typical U.S. home?',
            [
              new Answer('Space Heating', true),
              new Answer('Home Electronics', false),
              new Answer('Lighting', false),
              new Answer('Cooking', false)
            ],
            200
          ),
          new Question(
            "How many solar array fields are on OSU's soil?",
            [
              new Answer('5', true),
              new Answer('8', false),
              new Answer('2', false),
              new Answer('0', false)
            ],
            300
          ),
          new Question(
            "OSU's Energy Consumption Rule outlines expectations for acceptable and expected building operating temperatures. What are the expected building temperatures in the winter season?",
            [
              new Answer('66°F - 70°F', true),
              new Answer('55°F - 85°F', false),
              new Answer('75°F - 85°F', false),
              new Answer('72°F - 75°F', false)
            ],
            400
          ),
          new Question(
            'What is the average daily energy that a student living in a resident hall consumes?',
            [
              new Answer('6 kWh or 316 cellphone chargers', true),
              new Answer('8 kWh or 421 cellphone chargers', false),
              new Answer('2 kWh or 105 cellphone chargers', false),
              new Answer('10 kWh or 526 cellphone chargers', false)
            ],
            500
          )
        ]
      },
      {
        name: 'Fun Facts',
        questions: [
          // An array of question objects. Refer to question.js
          new Question(
            'What year did OSU first celebrate Earth Day?',
            [
              new Answer('1970', true),
              new Answer('1999', false),
              new Answer('2010', false),
              new Answer('2002', false)
            ],
            100
          ),
          new Question(
            "How many catalogued trees are on OSU's campus?",
            [
              new Answer('Over 5000', true),
              new Answer('2000 to 3000', false),
              new Answer('3000 to 4000', false),
              new Answer('4000 to 5000', false)
            ],
            200
          ),
          new Question(
            'What percent of food waste and yard trimmings fill U.S. landfills?',
            [
              new Answer('25%', true),
              new Answer('80%', false),
              new Answer('50%', false),
              new Answer('5%', false)
            ],
            300
          ),
          new Question(
            'On average, how many miles does our food travel before it gets to us?',
            [
              new Answer('1500 miles', true),
              new Answer('500 miles', false),
              new Answer('2200 miles', false),
              new Answer('1400 miles', false)
            ],
            400
          ),
          new Question(
            'In the Fiscal Year 2020-2021, how much recyclable material was processed by OSU Campus Recycling?',
            [
              new Answer('315 tons', true),
              new Answer('1200 lbs', false),
              new Answer('1600 tons', false),
              new Answer('450 tons', false)
            ],
            500
          )
        ]
      }
    ],
    points: 0, // An integer representing the number of points the player has,
    questionsAnswered: 0 // Number of questions the user has answered
  },
  getters: {
    answeredAll: (state) => state.questionsAnswered === 15,
    categories: (state) => state.categories.map((category) => category.name),
    points: (state) => state.points,
    questions: (state) => (categoryName) =>
      state.categories.filter((category) => category.name === categoryName)
  },

  actions: {
    // No actions
  },

  mutations: {
    addPoints (state, value) {
      state.points += value
    },
    answered (state) {
      state.questionsAnswered++
    }
  },

  modules: {
    // No modules
  }
}

export default new Vuex.Store(store)
