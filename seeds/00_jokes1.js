
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('joke_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('joke_tb').insert([
        {
         id: 1,
         categoryId: 3,
         joke: "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
         votes: 0
        },   {
        id: 2,
        categoryId: 3,
        joke: "What do you call a fake noodle? An Impasta.",
        votes: 0
        },   {
        id: 3,
        categoryId: 3,
        joke: "Want to hear a joke about paper? Nevermind it's tearable.",
        votes: 0
        },   {
        id: 4,
        categoryId: 1,
        joke: "My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face.",
        votes: 0
        },   {
        id: 5,
        categoryId: 2,
        joke: "How is a girlfriend like a laxative? They both irritate the shit out of you.",
        votes: 0
        }
      ]);
    }).then(function() {
      return knex.raw("SELECT setval('joke_tb_id_seq', (SELECT MAX(id) FROM joke_tb))")
    })
};
