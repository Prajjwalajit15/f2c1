const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log(developers);
  }
  
  // 2. Add Data
  function addData() {
    const newData = {};
    newData.name = prompt("Enter name:");
    newData.age = parseInt(prompt("Enter age:"));
    newData.profession = prompt("Enter profession:");
    data.push(newData);
    console.log("Data added:", newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const withoutAdmins = data.filter(person => person.profession !== "admin");
    data.length = 0;
    data.push(...withoutAdmins);
    console.log("Admins removed:", data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "alice", age: 30, profession: "developer" },
      { name: "bob", age: 28, profession: "admin" },
    ];
    const concatenatedArray = data.concat(dummyArray);
    console.log("Concatenated array:", concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average age:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    console.log("Is there anyone above 25?", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log("Unique professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by age:", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
      console.log("John's profession updated:", john);
    } else {
      console.log("John not found in the data.");
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCounts = data.reduce((counts, person) => {
      counts[person.profession] = (counts[person.profession] || 0) + 1;
      return counts;
    }, {});
    console.log("Profession counts:", professionCounts);
  }
  