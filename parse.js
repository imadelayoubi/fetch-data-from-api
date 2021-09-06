var Parse = {
    myJokes: [],

    server: `https://v2.jokeapi.dev/joke/Any`,

    readAll: function (successCB) {
        $.ajax({
            url: Parse.server,
            type: 'GET',
            data: { order: '-createdAt' },
            contentType: 'application/json',
            success: successCB,
            error: function (error) {
                console.error('Error : Failed to fetch messages', error);
            }
        });
    }

};