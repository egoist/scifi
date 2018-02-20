import Vue from 'vue'
import scifi from '../src'

new Vue({
  el: '#app',
  render() {
    return (
      <div>
        <span ref="text">Welcome to my life!</span>
        <hr />
        New content: <input v-model={this.newContent} />
        <hr />
        <select v-model={this.type}>
          <option
            value="en"
            selected={this.type === 'en'}>en</option>
          <option
            value="a-z"
            selected={this.type === 'a-z'}>a-z</option>
          <option
            value="A-Z"
            selected={this.type === 'A-Z'}>A-Z</option>
          <option
            value="a-zA-Z"
            selected={this.type === 'a-zA-Z'}>a-zA-Z</option>
        </select>
        <button onClick={this.scifi}>Sci-fi!</button>
      </div>
    )
  },
  data: {
    type: 'en',
    newContent: ''
  },
  methods: {
    scifi() {
      scifi(this.$refs.text, {
        chars: `[${this.type}]`,
        content: this.newContent || this.$refs.text.textContent
      })
    }
  }
})
