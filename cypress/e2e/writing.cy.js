describe('Add', () => {
    it('Should Add A new Movie', () => {
        cy.visit('/new');
        cy.get('input[name=movieName]').type('Halo: Combat Evolved');
        cy.get('input[name=releaseDate]').type('2024-07-18');
        cy.get('input[name=imageUrl]').type('https://tse3.mm.bing.net/th/id/OIP.TTMAV5HSOaJX2ho7er52RAHaLH?pid=ImgDet&rs=1');
        cy.get('input[name=rating]').type('9.2');
        
        cy.get('.movie-form .dropdown-input').click();
        cy.get('input[value=Crime]').click();

        cy.get('input[name=durationInMinutes]').type('120');
        cy.get('textarea[name=description]').type('The Pillar of Autumn exits slip-space and its crew discovers a large ringworld structure of unknown origin.');

    });
});