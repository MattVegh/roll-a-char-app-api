const express = require('express')
const CharacterService = require('./characters-service')

const jsonParser = express.json()
const characterRouter = express.Router()


// const serializedCharacter = character => ({
//     id: 1,
//     date_created: new Date(),
//     fullname: 'Rock',
//     gender: 'Paper-plane',
//     race: 'Tree',
//     classType: 'Scissors',

//     strength_original: 11,
//     dexterity_original: 12,
//     constitution_original: 14,
//     intelligence_original: 15,
//     wisdom_original: 11,
//     charisma_original: 14,

//     strength_race_bonus: 3,
//     charisma_race_bonus: 3,
//     dexterity_race_bonus: null,
//     constitution_race_bonus: null,
//     intelligence_race_bonus: null,
//     wisdom_race_bonus: null,

//     strength_total: 14,
//     dexterity_total: 12,
//     constitution_total: 14,
//     intelligence_total: 15,
//     wisdom_total: 11,
//     charisma_total: 17,

//     strength_modifier: '+2',
//     dexterity_modifier: '+1',
//     constitution_modifier: '+2',
//     intelligence_modifier: '+2',
//     widsom_modifier: '0',
//     charisma_modifier: '+3',

//     bio: 'Snip snip'
// })

characterRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        CharacterService.getAllCharacters(knexInstance)
            .then(characters => {
                res.json(characters)
            })
            .catch(next)
    })

    .post(jsonParser, (req, res, next) => {
        const {
            fullname,
            gender,
            race,
            class_type,
            strength_original,
            dexterity_original,
            constitution_original,
            intelligence_original,
            wisdom_original,
            charisma_original,
        
            strength_total,
            dexterity_total,
            constitution_total,
            intelligence_total,
            wisdom_total,
            charisma_total,
            strength_modifier,
            dexterity_modifier,
            constitution_modifier,
            intelligence_modifier,
            widsom_modifier,
            charisma_modifier,
            bio,
        } = req.body

        const newCharacter = {
            fullname,
            gender,
            race,
            class_type,
            strength_original,
            dexterity_original,
            constitution_original,
            intelligence_original,
            wisdom_original,
            charisma_original,
            strength_race_bonus,
            charisma_race_bonus,
            dexterity_race_bonus,
            constitution_race_bonus,
            intelligence_race_bonus,
            wisdom_race_bonus,
            strength_total,
            dexterity_total,
            constitution_total,
            intelligence_total,
            wisdom_total,
            charisma_total,
            strength_modifier,
            dexterity_modifier,
            constitution_modifier,
            intelligence_modifier,
            widsom_modifier,
            charisma_modifier,
            bio,
        }

        CharacterService.insertCharacter(
            req.app.get('db'),
            newCharacter
        )
            .then(character => {
                res
                    .status(201)
                    
                    .json(character)
            })
            .catch(next)
    })


module.exports = characterRouter