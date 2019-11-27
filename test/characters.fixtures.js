function makeCharactersArray() {
    return [
        {
            id: 1,
            date_created: '2019-11-26T16:22:32.615Z',
            fullname: 'Rock',
            gender: 'Paper-plane',
            race: 'Tree',
            class: 'Scissors',

            strength_original: 11,
            dexterity_original: 12,
            constitution_original: 14,
            intelligence_original: 15,
            wisdom_original: 11,
            charisma_original: 14,

            strength_race_bonus: 3,
            charisma_race_bonus: 3,

            strength_total: 14,
            dexterity_total: 12,
            constitution_total: 14,
            intelligence_total: 15,
            wisdom_total: 11,
            charisma_total: 17,

            strength_modifier: '+2' ,
            dexterity_modifier: '+1' ,
            constitution_modifier: '+2' ,
            intelligence_modifier: '+2' ,
            widsom_modifier: '0' ,
            charisma_modifier: '+3' ,

            bio: 'Snip snip'
        }
    ]
}

module.exports = {
    makeCharactersArray
}