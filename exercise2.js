const petNameField = document.getElementsByClassName("petNameField");
const ownerNameField = document.getElementsByClassName("ownerNameField");
const petSpeciesField = document.getElementsByClassName("petSpeciesField");
const petBreedField = document.getElementsByClassName("petBreedField");
const button = document.getElementsByTagName("button");
const petList = document.getElementsByClassName("petList");

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName;
    this.ownerName;
    this.species;
    this.breed;
  }

  hasSmeOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const namesList = function () {
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.innerText = `Pet's name: ${}`
  });
};
