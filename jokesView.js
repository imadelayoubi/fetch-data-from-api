var JokesView = {

    render: function () {
        var funnyJoke = Jokes.myJokes


        console.log(funnyJoke, 'funny')
        console.log(funnyJoke.setup, 'funny')
        $('.container').append(`<div class='jokeHolder' >
            <div class="joke" > ${funnyJoke.setup} </div>
        <div class="category">${funnyJoke.delivery} </div>
        </div>
      `)

        // console.log(funnyJoke)


    }
}

        // let funnyJoke = Jokes.myJokes.filter((element) => {
        //     return (element.setup)
        // })