<template>
  <div>
    <el-card
      :class="{
        active: true,
        answered: answered,
        correct: wasCorrect,
        wrong: !wasCorrect,
        'box-card': true,
      }"
      shadow="hover"
      @click.native="dialogVisible = !dialogVisible"
    >
      <h1 class="points-label">{{ points }}</h1>
    </el-card>
    <!-- Hidden question dialog -->
    <el-dialog
      :title="category + ' for ' + points + ' Points'"
      :visible.sync="dialogVisible"
      width="50%"
      center
    >
      <div class="question">
        {{ questionData.questionText }}<br />
        <span class="correct-answer">{{
          answered === true
            ? questionData.answers.filter((ans) => ans.isCorrect)[0].answerText
            : ""
        }}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-radio-group
          @change="handleAnswer"
          :disabled="answered"
          v-model="selectedAnswer"
          size="small"
        >
          <el-radio
            border
            v-for="(answer, index) in questionData.answers"
            :key="index"
            :label="index"
            @click="handleAnswer"
            >{{ answer.answerText }}</el-radio
          >
        </el-radio-group>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Question',
  computed: {
    questionData: function () {
      return this.$store.getters
        .questions(this.category)[0]
        .questions.filter((question) => question.pointValue === this.points)[0]
    }
  },
  data () {
    return {
      answered: false,
      dialogVisible: false,
      selectedAnswer: null,
      wasCorrect: false
    }
  },
  methods: {
    handleAnswer: function () {
      this.answered = true
      if (this.questionData.answers[this.selectedAnswer].isCorrect) {
        this.$store.commit('addPoints', this.points)
        this.$message({
          message: 'Correct!',
          type: 'success',
          duration: 3000
        })
        this.wasCorrect = true
      } else {
        this.$message.error(
          'Incorrect! The correct answer was: "' +
            this.questionData.answers.filter((answer) => answer.isCorrect)[0]
              .answerText +
            '"',
          3000
        )
      }
      this.$store.commit('answered')
    }
  },
  props: {
    category: String,
    points: Number
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style-variables.scss";

.box-card {
  text-align: center;
  background-color: $--color-primary;
  height: 13vh;
  margin: 0.1em;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.active {
  cursor: pointer;
  border-color: black;
  border-width: 0px;
}

.el-card {
  border-radius: 0;
}

.active:hover {
  background-color: $--color-spot;
}

.answered.wrong {
  background-color: $--color-wrong;
}

.answered.correct {
  background-color: $--color-correct;
}

.points-label {
  font-size: 28px;
  line-height: 8vh;
  color: #fff;
}

.question {
  word-break: normal;
  text-align: center;
}

.correct-answer {
  color: #4a773c;
  font-weight: bold;
}
</style>
