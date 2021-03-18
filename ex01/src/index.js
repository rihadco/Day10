var myPet = {
    species: "pas",
    name: "Dzeki",
    legs: 4,
    friends: ["Armin", "Amin"]
};
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };