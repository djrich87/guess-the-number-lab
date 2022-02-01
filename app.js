const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do{
      this.prevGuesses.push(this.getGuess()) //Pushing the output of getGuess
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  },
  
  getGuess: function(){
  let guess;

    do{
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
      return guess
  },

  render: function(){

    // console.log(this.secretNum)
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    } else {
      if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
        window.alert('Wrong Number! Your guess is too high!')
      } else {
        window.alert('Wrong Number! Your guess is too low!')
      }
    }
  }
}

game.play()

//look at the prevGuesses Array and access the most recent guess
//the mnost recent guess should be the very last element in the array
//how can we access the last element in the array
//once we access that element we will compare that to the secret number



//if guess is greater than secret number your guess is too high
//if guess is less than secret number your guess is too low
