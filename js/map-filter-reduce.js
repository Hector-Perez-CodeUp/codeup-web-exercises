const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 3 Language Users Using .filter
var threeLanguages = users.filter(function(person) {
    return person.languages.length >= 3;
})
console.log(threeLanguages)


// User Emails Using .map
var emails = users.map(function(person) {
    return person.email;
})
console.log(emails);


// Total Years of Exp using .reduce
const totalYears = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log(totalYears);


// Longest Email Using .reduce
const longestEmail = users.reduce((total, person) => {
    if (total.email.length > person.email.length) {
        return total
    } else {
        return person
    }
}).email;
console.log(longestEmail);


// All UserNames Using .reduce
let names = users.reduce(
    (a, b) => {return a += ` ${b.name}`}, ''
);
console.log(names);


// Bonus:  Unique List of Languages Using .reduce
var uniqueLanguages = users.reduce(function(totalLanguages, nextPerson) {
    nextPerson.languages.forEach(language => {
        if (!totalLanguages.includes(language)) {
            totalLanguages.push(language);
        }
    })
    return totalLanguages;
}, [])
console.log(uniqueLanguages)