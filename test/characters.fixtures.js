function makeCharactersArray() {

    return [
        {
            id: 1,
            date_created: new Date(),
            fullname: 'Rock',
            gender: 'Paper-plane',
            race: 'Tree',
            classType: 'Scissors',

            strength_original: 11,
            dexterity_original: 12,
            constitution_original: 14,
            intelligence_original: 15,
            wisdom_original: 11,
            charisma_original: 14,

            strength_total: 14,
            dexterity_total: 12,
            constitution_total: 14,
            intelligence_total: 15,
            wisdom_total: 11,
            charisma_total: 17,

            bio: 'Snip snip'
        }
    ]
}

module.exports = {
    makeCharactersArray
}


//postman format

// {
//     "fullname" : "Rock",
//     "gender" : "Paper-plane",
//     "race" : "Tree",
//     "class_type" : "Scissors",

//     "strength_original" : "11",
//     "dexterity_original" : "12",
//     "constitution_original" : "14",
//     "intelligence_original" : "15",
//     "wisdom_original" : "11",
//     "charisma_original" : "14",

//     "strength_total" : "14",
//     "dexterity_total" : "12",
//     "constitution_total" : "14",
//     "intelligence_total" : "15",
//     "wisdom_total" : "11",
//     "charisma_total" : "17",

//     "bio": "Snip snip"
// }