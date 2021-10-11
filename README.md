- Submit assignment GitHub repo link in essay box. Remember to use .gitignore node_modules. Commit often

let animalArray = [
{ id: 1, animalName: "dog" },
{ id: 2, animalName: "cat" },
{ id: 3, animalName: "hamster" },
];

1. create a animalRouter.js in the router folder

2. make sure to require it in app.js

3. create a Get request to query all the animalArray and in the same request if query exists your program should able to query a specific animal using animalName

4. create a Get request that uses params id to query to animal by ID

5. create a Get request that uses params animalName to query to animal by animalName

6. create a Post request to create a new animal and if there's duplicate in the array, you should let the user know that the animal already exists and please pick another animal. If the user sends in an empty object your program will tell the user "sorry no empty data"

7. create a Put request to update the animalName using animalName params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

8. create a Put request to update the animalName using ID params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

9. create a delete request to delete the animalName using animalName params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. create a Put request to update the animalName using params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

10. create a delete request to delete the animalName using ID params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. create a Put request to update the animalName using params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling
