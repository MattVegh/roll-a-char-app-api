const express = require('express')
const CharacterService = require('./characters-service')

const jsonParser = express.json()
const characterRouter = express.Router()

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

            strength_race_bonus,
            charisma_race_bonus,

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

            bio
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

            bio
        }

        CharacterService.insertCharacter(
            req.app.get('db'),
            newCharacter
            
        )
            .then(character => {
                console.log('newchar is', newCharacter)
                res
                    .status(201)
                    .json(character)
            })
            .catch(next)
    })


module.exports = characterRouter