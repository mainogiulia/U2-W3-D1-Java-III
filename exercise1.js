class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  whoIsOlder(otherUser) {
    if (this.age < otherUser.age) {
      return `${otherUser.firstName} ${otherUser.lastName} is older than ${this.firstName} ${this.lastName}`;
    } else if (this.age > otherUser.age) {
      return `${otherUser.firstName} ${otherUser.lastName} is younger than ${this.firstName} ${this.lastName}`;
    } else {
      return `${otherUser.firstName} ${otherUser.lastName} is the same age of ${this.firstName} ${this.lastName}`;
    }
  }
}

firstUser = new User("Bruce", "Wayne", "35", "Gotham");
secondUser = new User("Richard", "Grayson", "24", "Bludhaven");
thirdUser = new User("Jason", "Todd", "21", "Gotham");
console.log(secondUser.whoIsOlder(thirdUser));
