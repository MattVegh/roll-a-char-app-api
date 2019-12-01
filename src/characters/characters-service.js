const CharacterService = {
    getAllCharacters(knex) {
        return knex.select('*').from('characters')
    },

    insertCharacter(knex, newCharacter) {
        return knex
        .insert(newCharacter)
        .into('characters')
        .returning('*')
        
    }
}


module.exports = CharacterService