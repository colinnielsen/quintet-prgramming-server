const database = require('./connection')

module.exports = {
    list() {
        return database("joke_tb")
    },
    read(id){
        return database("joke_tb").select().where('categoryId', id)
    },
    // create(joke_tb){
    //         return database("joke_tb")
    //         .insert(joke_tb)
    //         .returning("*")
    //         .then(record => record[0])
    // },
    upVote(id,joke_tb){
        return database("joke_tb")
        .where('id', id)
        .increment('votes', 1)
        .returning("*")
        // .then(record => record[0])
    },

    downVote(id,joke_tb){
        return database("joke_tb")
        .where('id', id)
        .increment('votes', -1)
        .returning("*")
        // .then(record => record[0])
    },

    addJoke(joke_tb){
        return database("joke_tb")
        .insert(joke_tb)
        .returning("*")
    },

    delete(id){
        return database("joke_tb").delete().where("id", id);
    }

}




