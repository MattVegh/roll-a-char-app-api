const CharacterService = {
    getAllCharacters(knex) {
        return knex.select('*').from('characters')
    }
}


module.exports = CharacterService