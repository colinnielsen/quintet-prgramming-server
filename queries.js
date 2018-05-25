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
    // update(id,joke_tb){
    //     return database("joke_tb")
    //     .where('id', id)
    //     .update(joke_tb)
    //     .returning("*")
    //     .then(record => record[0])
    // },

    delete(id){
        return database("joke_tb").delete().where("id", id);
    }

}




