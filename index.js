// Variable declaration
let name = "Moe";
let age = 31;
let city = "Lyon";

console.log("Variables declared:");
console.log("Name:", name);
console.log("Age:", age);
console.log("city:", city);

// Reassigning value
city = "Grenoble";
console.log("\nCity modified:");
console.log("New city:", city);

// Creating an object
let user = {
  name: name,
  age: age,
  city: city,
};

console.log("\nUser object created:");
console.log(user);

//Modifying a property
user.city = "Grenoble";
console.log("\nCity property modified:");
console.log(user);

// Adding a property
user.email = "Moe@F.com";
console.log("\nEmail property added:");
console.log(user);

user.friends = ["Dodo", "Coco", "Jeje", "Lolo"];
console.log("\nFriends array added:");
console.log(user);

// Array manipulation
// Removing a friend (Dodo)
let sophieIndex = user.friends.indexOf("Dodo");
if (sophieIndex !== -1) {
  user.friends.splice(sophieIndex, 1);
}
console.log("\nFriend removed (Dodo):");
console.log(user.friends);

// Adding a new friend at the end
user.friends.push("Nono");
console.log("\nNew friend added (Nono):");
console.log(user.friends);

// Replacing a friend with another (Nono -> Koko)
let lucasIndex = user.friends.indexOf("Nono");
if (lucasIndex !== -1) {
  user.friends[lucasIndex] = "Koko";
}
console.log("\nFriend replaced (Nono -> Koko):");
console.log(user.friends);

// Traversing the array
console.log("\nTraversing the friends array:");
for (let i = 0; i < user.friends.length; i++) {
  console.log(`Friend #${i + 1}: ${user.friends[i]}`);
}

// With forEach
console.log("\nWith forEach:");
user.friends.forEach((friend, index) => {
  console.log(`Friend #${index + 1}: ${friend}`);
});

// Simple function
console.log("\nSimple function:");
function welcomUser(firstName) {
  console.log(`Welcome ${firstName}! We're soo delighted to see you again.`);
}
welcomUser(user.name);

// Function with return value
console.log("\nFunction with return value:");
function calculateBirthYear(age) {
  const currentYear = 2025;
  return currentYear - age;
}
const birthYear = calculateBirthYear(user.age);
console.log(`Birth year: ${birthYear}`);

//Function with condition
console.log("\nFunction with condition:");
function checkAdult(age) {
  return age >= 18;
}
console.log(`Is adult: ${checkAdult(user.age)}`);

//Function that manipulates an object
console.log("\nFunction that manipulates an object:");
function displayProfile(user) {
  return `${user.name}'s Profile (${user.age} years old)
  - Email: ${user.email}
  - City: ${user.city}
  - Friends: ${user.friends.join(", ")}`;
}
console.log(displayProfile(user));

// Bonus functions
console.log("\nBonus functions:");

function addFriend(user, friend) {
  user.friends.push(friend);
  return user;
}
addFriend(user, "Dada");
console.log("After adding dada:", user.friends);

function removeFriend(user, friend) {
  const index = user.friends.indexOf(friend);
  if (index !== -1) {
    user.friends.splice(index, 1);
    console.log(`${friend} has been removed from the friends list.`);
  } else {
    console.log(`${friend} is not in the friends list.`);
  }
  return user;
}
removeFriend(user, "Dada");
console.log("After removing Dada:", user.friends);
removeFriend(user, "Caca");

document.getElementById("profile-output").textContent = displayProfile(user);
