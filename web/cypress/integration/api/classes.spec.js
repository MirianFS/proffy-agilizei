///<reference types="cypress"/>
///<reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastro um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Mirian frança",
                "avatar":"https://static1.patasdacasa.com.br/articles/1/35/1/@/1093-gatos-pretos-sao-animais-fascinantes-co-articles_media_desktop-4.jpg",
                "whatsapp":"48999999999",
                "bio":"Biografia show de bola",
                "subject":"Educação Física",
                "cost":100,
                "schedule":[
                  {
                    "week_day":"3",
                    "from":"20:00",
                    "to":"21:00"
                  }
                ]
              }
        }).then((response) =>{ 
                console.log(response)
                expect(response.status).to.eq(201)
                expect(response.statusText).to.eq('Created')
                expect(response.duration).lessThan(50)
                expect(response.body).to.have.property('0').to.have.property('class_id').an('number')
                expect(response.body).to.have.property('0').to.have.property('week_day').to.eq('3')
                expect(response.body).to.have.property('0').to.have.property('from').an('number').to.eq(1200)
                expect(response.body).to.have.property('0').to.have.property('to').an('number').to.eq(1260)
        })
    });
});