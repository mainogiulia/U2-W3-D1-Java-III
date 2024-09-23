const petNameField = document.getElementById("petNameField");
const ownerNameField = document.getElementById("ownerNameField");
const petSpeciesField = document.getElementById("petSpeciesField");
const petBreedField = document.getElementById("petBreedField");
const button = document.getElementById("button");
const petList = document.getElementById("petList");

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
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
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.innerText = `Pet's name: ${pet.petName}; Owner's name: ${pet.ownerName}; Pet's species: ${pet.species}; Pet's breed: ${pet.breed}.`;
    petList.appendChild(listItem);
  });
};

button.onclick = function () {
  let petInfo = new Pet(petNameField.value, ownerNameField.value, petSpeciesField.value, petBreedField.value);
  pets.push(petInfo);
  namesList();
};
