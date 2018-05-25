const express = require('express')
const router = express.Router()
const queries = require('../queries')


router.get("/", (request, response, next) => {
    queries.list().then(jokes => {
        response.json({jokes});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(jokes => {
        jokes
            ? response.json({jokes})
            : response.sendStatus(404)
    }).catch(next);
});

router.post("/", (request, response, next) => {
        queries.addJoke(request.body).then(joke => {
        response.status(201).json({joke: joke});
    }).catch((error)=> {
        console.log(error)
        next()
    } );
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(next);
});

router.put("/upVote/:id", (request, response, next) => {
    queries.upVote(request.params.id, request.body).then(jokes => {
        response.json({jokes: jokes[0]});
    }).catch(next);
});

router.put("/downVote/:id", (request, response, next) => {
    queries.downVote(request.params.id, request.body).then(jokes => {
        response.json({jokes: jokes[0]});
    }).catch(next);
});
module.exports = router;
