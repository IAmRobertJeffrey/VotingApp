const express = require("express");
const router = express.Router();
const Poll = require("../models/poll");

router.get("/", async (request, result) => {
  try {
    const polls = await Poll.find();
    result.json(polls);
  } catch (err) {
    result.json({ message: err });
  }
});

router.get("/:pollId", async (request, result) => {
  try {
    const poll = await Poll.findById(request.params.pollId);
    if (poll) {
      result.json(poll);
    } else {
      const errorObject = {
        response:
          "The provided (pollId) from the request parameter does not exist.",
      };
      result.json(errorObject);
    }
  } catch (err) {
    result.json({ message: err });
  }
});

router.post("/", async (request, result) => {
  const poll = new Poll({
    title: request.body.title,
    votes: request.body.votes,
  });
  try {
    const savedPoll = await poll.save();
    result.json(savedProduct);
  } catch (err) {
    result.json(err);
  }
});

router.patch("/:pollId", async (request, result) => {
  try {
    console.log("start");
    let pollToUpdate = await Poll.findById(request.params.pollId);
    if (pollToUpdate) {
      let countTotal = 0;
      let count = await Poll.find({$and: [{"votes.name": request.body.name}, {"_id": request.params.pollId}]}, {votes:1, _id: 0})
      let entryToIncrement = await Poll.find({$and: [{"votes.name": request.body.name}, {"_id": request.params.pollId}]})
      console.log(count[0].votes);
      count[0].votes.forEach(element => {
        if(element.name === request.body.name)
        {
          countTotal = element.count
        }
      });
      if(entryToIncrement)
      {
        let pollToUpdateReal = await Poll.findOneAndUpdate(
          {
            $and: 
            [
              {"votes.name": request.body.name}, 
              {"_id": request.params.pollId}
            ]
          },
            {$set:{"votes.$[updateVote].count" : countTotal + 1},
          }, 
          {
            new: true,
            "arrayFilters": 
          [
            {"updateVote.name" : request.body.name},
            
          ]
        })
        result.json(pollToUpdateReal);
      }
    } else {
      console.log("nothing");
      const errorObject = {
        response: "(entryID) provided in the request parameter does not exist.",
      };
      result.json(errorObject);
    }
  } catch (err) {
    result.json(err);
  }
});

module.exports = router;
