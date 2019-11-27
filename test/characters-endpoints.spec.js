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
        context('given no chacters', () => {
            it('responds with 200 empty list', () => {
                return supertest(app)
                    .get('/characters')
                    .expect(200, [])
            })
        })

        context('given there are characters in the database', () => {
            const testCharacters = makeCharactersArray();

            it('responds with all of the characters', () => {
                return supertest(app)
                .get('/characters')
                .expect(200, testCharacters)
            })
        })
    })




})