/// <reference types="cypress" />


describe('API Test', () => {


    it('GET login', () => {
        cy.request({

            method: 'GET',
            url: '/user/login',
            body: {

                username: 'kauae',
                password: 'baldo'

            }
        }).then(res => console.log(res, 'Exibindo no console')

        ).its('body').should('not.be.empty').as('Validação')


    })


    it('POST add order', () => {
        cy.request({

            method: 'POST',
            url: '/store/order',
            body: {
                "id": 12,
                "petId": 198772,
                "quantity": 7,
                "shipDate": "2023-02-21T12:54:14.792Z",
                "status": "approved",
                "complete": true

            }
        }).then(res => console.log(res))

    })



    it('POST add pet', () => {
        cy.request({

            method: 'POST',
            url: '/pet',
            body: {

                "id": 1220,
                "name": "doggie",
                "category": {
                    "id": 1,
                    "name": "Dogs"
                },
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 22,
                        "name": "string"
                    }
                ],
                "status": "available"

            }
        }).then(res => {

            expect(res.status).to.be.equal(200)

        })
    })


    it('PUT Update an existing pet', () => {
        cy.request({

            method: 'PUT',
            url: '/pet',
            body: {

                "id": 12,
                "name": "doggie",
                "category": {
                    "id": 2,
                    "name": "Doguinho"
                },
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 222,
                        "name": "Astolfo"
                    }
                ],
                "status": "available"

            }
        }).then(res => {

            expect(res.status).to.be.equal(200)

        })


    })


})




