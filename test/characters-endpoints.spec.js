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

    before('clean the table', () => db.raw('TRUNCATE characters RESTART IDENTITY CASCADE'))

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

                bio: 'Snip snip',
                date_created: new Date(),
            }
            return supertest(app)
                .post('/characters')
                .send(newCharacter)
                .expect(201)
                .expect(res => {
                    console.log('res body is', res.body)
                    console.log('newCharacter is', newCharacter)
                    const expected = { ...newCharacter, id: 1 }
                    const { date_created, ...actual } = res.body[0]
                    expect(actual).to.eql(expected)

                    //expect(res.body[0]).to.include(expected)
                    //expect(res.body[0]).to.have.property('id')
                })
                .then(postRes =>
                    supertest(app)
                        .get(`/characters/${postRes.body.id}`)
                        .expect(postRes.body)
                )
        })

    })


})