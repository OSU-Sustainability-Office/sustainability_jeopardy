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
        questions: [ // An array of question objects. Refer to question.js
          new Question('What is the OSU Sustainability Office\'s main focus?', [
            new Answer('All of These', true),
            new Answer('Reducing Carbon Emissions', false),
            new Answer('Green Buildings', false),
            new Answer('Tracking Utility Consumption', false)
          ], 100),
          new Question('What percentage of students walk, bike, or use other non-motorized means to get to campus?', [
            new Answer('70%', true),
            new Answer('20%', false),
            new Answer('100%', false),
            new Answer('50%', false)
          ], 200),
          new Question('How many student staff members does the OSU Sustainability Office employ?', [
            new Answer('5', true),
            new Answer('20', false),
            new Answer('13', false),
            new Answer('2', false)
          ], 300),
          new Question('In what year was the OSU Sustainability Office established?', [
            new Answer('2005', true),
            new Answer('1970', false),
            new Answer('1897', false),
            new Answer('1998', false)
          ], 400),
          new Question('How many OSU buildings are LEED (or equivalently certified) as \'sustainable\'?', [
            new Answer('26', true),
            new Answer('5', false),
            new Answer('37', false),
            new Answer('13', false)
          ], 500)
        ]
      },
      {
        name: 'Energy',
        questions: [ // An array of question objects. Refer to question.js
          new Question('What is the most efficient type of light bulb?', [
            new Answer('Light-Emitting Diode (LED)', true),
            new Answer('Compact Fluorescent Light (CFL)', false),
            new Answer('Incandescent', false),
            new Answer('Dihydrogen Monoxide Filament (DMF)', false)
          ], 100),
          new Question('What is the biggest use of energy in a typical U.S. home?', [
            new Answer('Space Heating', true),
            new Answer('Home Electronics', false),
            new Answer('Lighting', false),
            new Answer('Cooking', false)
          ], 200),
          new Question('How many solar arrays can be found on OSU\'s property?', [
            new Answer('9', true),
            new Answer('8', false),
            new Answer('2', false),
            new Answer('1', false)
          ], 300),
          new Question('What is the only LEED (Leadership in Energy & Environmental Design) Platinum certified building on campus?', [
            new Answer('The Energy Center', true),
            new Answer('Valley Library', false),
            new Answer('Kelley Engineering Center', false),
            new Answer('Dixon Recreation Center', false)
          ], 400),
          new Question('OSU is working with the Bonneville Power Administration to develop what technology?', [
            new Answer('Wind Forecasting Models', true),
            new Answer('Thin Film Flexible Substrate Solar Panels', false),
            new Answer('Uses for Oregon\'s Biomass', false),
            new Answer('Compound Multi-Nucleic Flux Capacitors', false)
          ], 500)
        ]
      },
      {
        name: 'Fun Facts',
        questions: [ // An array of question objects. Refer to question.js
          new Question('What year did OSU first celebrate Earth Day?', [
            new Answer('1970', true),
            new Answer('1999', false),
            new Answer('1984', false),
            new Answer('2008', false)
          ], 100),
          new Question('How many catalogued trees are on OSU\'s campus?', [
            new Answer('Over 5000', true),
            new Answer('2000 to 3000', false),
            new Answer('3000 to 4000', false),
            new Answer('4000 to 5000', false)
          ], 200),
          new Question('What percentage of U.S. landfills are made up of food waste and yard trimmings?', [
            new Answer('25%', true),
            new Answer('80%', false),
            new Answer('50%', false),
            new Answer('5%', false)
          ], 300),
          new Question('On average, how many miles does our food travel before it gets to us?', [
            new Answer('1500 miles', true),
            new Answer('500 miles', false),
            new Answer('2200 miles', false),
            new Answer('1400 miles', false)
          ], 400),
          new Question('In the Fiscal Year 2018-2019, how much recyclable material was processed by OSU Campus Recycling?', [
            new Answer('825.7 tons', true),
            new Answer('320.01 tons', false),
            new Answer('523 pounds', false),
            new Answer('13.37 tons', false)
          ], 500)
        ]
      }
    ],
    points: 0, // An integer representing the number of points the player has,
    questionsAnswered: 0 // Number of questions the user has answered
  },
  getters: {
    answeredAll: (state) => state.questionsAnswered === 15,
    categories: (state) => state.categories.map(category => category.name),
    points: (state) => state.points,
    questions: (state) => (categoryName) => state.categories.filter(category => category.name === categoryName)
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
