var App = {


    fetch: function (callback = () => { }) {
        Parse.readAll((data) => {
            console.log(data)
            // $('.jokeHolder').append(data.category)
            // $('.jokeHolder').append(data.setup)
            // $('.jokeHolder').append(data.delivery)
            Jokes.myJokes = data
            JokesView.render()
            callback();
        });
    },

};
