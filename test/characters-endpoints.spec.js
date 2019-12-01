const knex = require('knex')
const app = require('../src/app')
const { makeCharactersArray } = require('./characters.fixtures')

describe('Characters Endpoints', function () {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db.raw('TRUNCATE characters'))

    describe('GET /characters', () => {
        context('given no characters', () => {
            it('responds with 200 empty list', () => {
                return supertest(app)
                    .get('/characters')
                    .expect(200, [])
            })
        })

        // context('given there are characters in the database', () => {
        //     const testCharacters = makeCharactersArray();

        //     beforeEach('insert characters', () => {
        //         return db
        //         .into('characters')
        //         .insert(testCharacters)

        //     })
        //     it('responds with all of the characters', () => {
        //         return supertest(app)
        //         .get('/characters')
        //         .expect(200, testCharacters)
        //     })
        // })
    })

    describe('POST /characters', () => {
        it('created a character, responds with 201 and new character', function () {
            const newCharacter = {
                fullname: 'Test',
                gender: 'For POST',
                race: 'Tree',
                class_type: 'Scissors',

                strength_original: 11,
                dexterity_original: 12,
                constitution_original: 14,
                intelligence_original: 15,
                wisdom_original: 11,
                charisma_original: 14,

                strength_race_bonus: 3,
                charisma_race_bonus: 3,
                dexterity_race_bonus: null,
                constitution_race_bonus: null,
                intelligence_race_bonus: null,
                wisdom_race_bonus: null,

                strength_total: 14,
                dexterity_total: 12,
                constitution_total: 14,
                intelligence_total: 15,
                wisdom_total: 11,
                charisma_total: 17,

                strength_modifier: '+2',
                dexterity_modifier: '+1',
                constitution_modifier: '+2',
                intelligence_modifier: '+2',
                widsom_modifier: '0',
                charisma_modifier: '+3',

                bio: 'Snip snip'
            }
            return supertest(app)
                .post('/characters')
                .send(newCharacter)
                .expect(201)
                .expect(res => {
                    console.log('test response is', res.body)
                    console.log('newCharacter', newCharacter)
                    expect(res.body.fullname).to.eql(newCharacter.fullname)
                    expect(res.body.gender).to.eql(newCharacter.gender)
                    expect(res.body.race).to.eql(newCharacter.race)
                    expect(res.body.class_type).to.eql(newCharacter.class_type)

                    expect(res.body.strength_original).to.eql(newCharacter.strength_original)
                    expect(res.body.dexterity_original).to.eql(newCharacter.dexterity_original)
                    expect(res.body.constitution_original).to.eql(newCharacter.constitution_original)
                    expect(res.body.intelligence_original).to.eql(newCharacter.intelligence_original)
                    expect(res.body.wisdom_original).to.eql(newCharacter.wisdom_original)
                    expect(res.body.charisma_original).to.eql(newCharacter.charisma_original)

                    expect(res.body.strength_race_bonus).to.eql(newCharacter.strength_race_bonus)
                    expect(res.body.charisma_race_bonus).to.eql(newCharacter.charisma_race_bonus)
                    expect(res.body.dexterity_race_bonus).to.eql(newCharacter.dexterity_race_bonus)
                    expect(res.body.constitution_race_bonus).to.eql(newCharacter.constitution_race_bonus)
                    expect(res.body.intelligence_race_bonus).to.eql(newCharacter.intelligence_race_bonus)
                    expect(res.body.wisdom_race_bonus).to.eql(newCharacter.wisdom_race_bonus)

                    expect(res.body.strength_total).to.eql(newCharacter.strength_total)
                    expect(res.body.dexterity_total).to.eql(newCharacter.dexterity_total)
                    expect(res.body.constitution_total).to.eql(newCharacter.constitution_total)
                    expect(res.body.intelligence_total).to.eql(newCharacter.intelligence_total)
                    expect(res.body.wisdom_total).to.eql(newCharacter.wisdom_total)
                    expect(res.body.charisma_total).to.eql(newCharacter.charisma_total)

                    expect(res.body.strength_modifier).to.eql(newCharacter.strength_modifier)
                    expect(res.body.dexterity_modifier).to.eql(newCharacter.dexterity_modifier)
                    expect(res.body.constitution_modifier).to.eql(newCharacter.constitution_modifier)
                    expect(res.body.intelligence_modifier).to.eql(newCharacter.intelligence_modifier)
                    expect(res.body.widsom_modifier).to.eql(newCharacter.widsom_modifier)
                    expect(res.body.charisma_modifier).to.eql(newCharacter.charisma_modifier)

                    expect(res.body.bio).to.eql(newCharacter.bio)

                    expect(res.body).to.have.property('id')
                })
                .then(postRes =>
                    supertest(app)
                        .get(`/characters/${postRes.body.id}`)
                        .expect(postRes.body)
                )
        })

    })


})