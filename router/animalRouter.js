const express = require('express');
const router = express.Router();

let animalArray = [
  { id: 1, animalName: 'dog' },
  { id: 2, animalName: 'cat' },
  { id: 3, animalName: 'hamster' },
];

router.get('/', function (req, res) {
  console.log(animalArray);
  // res.render("index")

  let foundAnimal = null;
  //see what the query length is
  console.log(`URL QUERY LENGTH: ${Object.keys(req.query).length}`);
  //if length is 0 then return the full array
  if (Object.keys(req.query).length === 0) {
    res.json({ animalArray });
    //if length is not 0, search for matches
  } else {
    animalArray.forEach((animal) => {
      //if there is a match, set truthy value for search
      if (
        animal.animalName === req.query.animal ||
        animal.id === +req.query.id
      ) {
        foundAnimal = animal;
      }
    });
    //if truthy value is NOT true, return an error to guide user
    if (!foundAnimal) {
      return res.send('Animal not found, please check your spelling');
      //if truthy value is true, return the animal
    } else {
      return res.json({ foundAnimal });
    }
  }
});

router.post('/add-animal', function (req, res) {
  console.log(req.body);
  let inputAnimal = req.body.animalName;
  let foundAnimal = null;

  if (inputAnimal.length === 0) {
    return res.send('Sorry no empty data!');
  } else {
    animalArray.forEach((animal) => {
      //if there is a match, set truthy value for search
      if (animal.animalName === inputAnimal) {
        foundAnimal = animal;
        console.log(foundAnimal);
      }
    });
    //if truthy value is true, return an error to guide user
    if (foundAnimal) {
      return res.send(
        'The animal already exists and please pick another animal'
      );
      //if truthy value is true, return the animal
    } else {
      animalArray.push({
        id: +`${animalArray.length + 1}`,
        animalName: `${req.body.animalName}`,
      });
    }
  }
  res.json({ animalArray });
});

router.delete('/delete-animal', function (req, res) {
  console.log(animalArray);
  // res.render("index")

  let foundAnimal = null;
  //see what the query length is
  console.log(`URL QUERY LENGTH: ${Object.keys(req.query).length}`);
  //if length is 0 then return the full array
  if (Object.keys(req.query).length === 0) {
    return res.send('No animal entered to delete. Go home you drunk');
    //if length is not 0, search for matches
  } else {
    animalArray.forEach((animal) => {
      //if there is a match, set truthy value for search
      if (
        animal.animalName === req.query.animal ||
        animal.id === +req.query.id
      ) {
        foundAnimal = animal;
      }
    });
    //if truthy value is NOT true, return an error to guide user
    if (!foundAnimal) {
      return res.send('Animal not found, please check your spelling');
      //if truthy value is true, return the animal
    } else {
      // console.log('FULL ARRAY:',animalArray)
      // console.log('ARRAY 0:',animalArray[0])
      // console.log('FOUND ANIMAL:',foundAnimal)
      // console.log("INDEX OF", animalArray.indexOf(foundAnimal))
      // console.log("AnArr[0] Matches FoundAn:", animalArray[0] === foundAnimal)

      animalArray.splice(animalArray.indexOf(foundAnimal), 1);
      return res.send(`${foundAnimal.animalName} has been deleted!`);
    }
  }
});

router.put('/update-animal', function (req, res) {
  console.log(animalArray);
  // res.render("index")

  let foundAnimal = null;
  //see what the query length is
  console.log(`URL QUERY LENGTH: ${Object.keys(req.query).length}`);
  //if length is 0 then return the full array
  if (Object.keys(req.query).length === 0) {
    res.send('No Animal selected to update, please choose an animal');
    //if length is not 0, search for matches
  } else {
    animalArray.forEach((animal) => {
      //if there is a match, set truthy value for search
      if (
        animal.animalName === req.query.animal ||
        animal.id === +req.query.id
      ) {
        foundAnimal = animal;
      }
    });
    //if truthy value is NOT true, return an error to guide user
    if (!foundAnimal) {
      return res.send('Animal not found, please check your spelling');
      //if truthy value is true, return the animal
    } else {
      foundAnimal.animalName = `${req.body.animalName}`;
      return res.json({ foundAnimal });
    }
  }
});

module.exports = router;
