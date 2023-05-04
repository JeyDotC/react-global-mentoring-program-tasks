describe('Add', () => {
    it('Should Display The Movie Form on "Add New" button click', () => {
        cy.visit('/');
        cy.get('a[href="/new"]').click();

        cy.get('.dialog-title h1').should('have.text', 'Add Movie');
        cy.get('input[name=movieName]').should('have.value', '');
        cy.get('input[name=releaseDate]').should('have.value', '');
        cy.get('input[name=imageUrl]').should('have.value', '');
        cy.get('input[name=rating]').should('have.value', '');
        cy.get('input[name=durationInMinutes]').should('have.value', '');
        cy.get('textarea[name=description]').should('have.value', '');
    });

    it('Should Display The Movie Form on Navigate to /new', () => {
        cy.visit('/new');

        cy.get('input[name=movieName]').should('have.value', '');
        cy.get('input[name=releaseDate]').should('have.value', '');
        cy.get('input[name=imageUrl]').should('have.value', '');
        cy.get('input[name=rating]').should('have.value', '');
        cy.get('input[name=durationInMinutes]').should('have.value', '');
        cy.get('textarea[name=description]').should('have.value', '');
    });

    it('Should Add A new Movie', () => {
        cy.visit('/new');
        cy.get('input[name=movieName]').type('Halo: Combat Evolved');
        cy.get('input[name=releaseDate]').type('2024-07-18');
        cy.get('input[name=imageUrl]').type('https://tse3.mm.bing.net/th/id/OIP.TTMAV5HSOaJX2ho7er52RAHaLH?pid=ImgDet&rs=1');
        cy.get('input[name=rating]').type('9.2');
        
        cy.get('.movie-form .dropdown-input').click();
        cy.get('input[value=Action]').click();

        cy.get('input[name=durationInMinutes]').type('120');
        cy.get('textarea[name=description]').type('The Pillar of Autumn exits slip-space and its crew discovers a large ringworld structure of unknown origin.');
        cy.get('.movie-form button[type=submit]').click();

        cy.visit('/?query=Halo: Combat Evolved');

        cy.get('#main-content-movies .movie-title:first-child h3').should('contain', 'Halo: Combat Evolved');
    });
});

describe('Edit', () => {
    it('Should Display The Movie Form on "Edit" context button click', () => {
        cy.visit('/');
        cy.get('#main-content-movies .movie-title img[alt=Zootopia]').rightclick();
        cy.get('.dialog a').contains('Edit').click();

        cy.get('.dialog-title h1').should('have.text', 'Edit Movie');
        cy.get('input[name=movieName]').should('have.value', 'Zootopia');
        cy.get('input[name=releaseDate]').should('have.value', '2016-02-11');
        cy.get('input[name=imageUrl]').should('have.value', 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg');
        cy.get('input[name=rating]').should('have.value', '7.7');
        cy.get('input[value=Adventure]').should('be.checked');
        cy.get('input[value=Comedy]').should('be.checked');
        cy.get('input[name=durationInMinutes]').should('have.value', '108');
        cy.get('textarea[name=description]').should('have.value', 'Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia\'s police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.');
    });

    it('Should Display The Movie Form on Navigate to /:movieId/edit', () => {
        cy.visit('/269149/edit');

        cy.get('.dialog-title h1').should('have.text', 'Edit Movie');
        cy.get('input[name=movieName]').should('have.value', 'Zootopia');
        cy.get('input[name=releaseDate]').should('have.value', '2016-02-11');
        cy.get('input[name=imageUrl]').should('have.value', 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg');
        cy.get('input[name=rating]').should('have.value', '7.7');
        cy.get('input[value=Adventure]').should('be.checked');
        cy.get('input[value=Comedy]').should('be.checked');
        cy.get('input[name=durationInMinutes]').should('have.value', '108');
        cy.get('textarea[name=description]').should('have.value', 'Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia\'s police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.');
    });

    it('Should Edit A Movie', () => {
        // Arrange
        cy.visit('/new');
        cy.get('input[name=movieName]').type('Halo: Combat Evolved');
        cy.get('input[name=releaseDate]').type('2024-07-18');
        cy.get('input[name=imageUrl]').type('https://tse3.mm.bing.net/th/id/OIP.TTMAV5HSOaJX2ho7er52RAHaLH?pid=ImgDet&rs=1');
        cy.get('input[name=rating]').type('9.2');
        
        cy.get('.movie-form .dropdown-input').click();
        cy.get('input[value=Action]').click();

        cy.get('input[name=durationInMinutes]').type('120');
        cy.get('textarea[name=description]').type('The Pillar of Autumn exits slip-space and its crew discovers a large ringworld structure of unknown origin.');
        cy.get('.movie-form button[type=submit]').click();

        cy.visit('/?query=Halo: Combat Evolved');
        cy.get('#main-content-movies .movie-title img[alt="Halo: Combat Evolved"]').first().rightclick();
        cy.get('.dialog a').contains('Edit').click();

        // Act
        cy.get('input[name=releaseDate]').type('2026-07-18');
        cy.get('input[name=imageUrl]').type('{selectall}{backspace}https://th.bing.com/th/id/OIP.yQ8BYLQc3L-QiVcBcxETvgHaLH?pid=ImgDet&rs=1');
        cy.get('.movie-form button[type=submit]').click();

        // Assert
        cy.visit('/?query=Halo: Combat Evolved');
        cy.get('#main-content-movies .movie-title:first img').should('have.attr', 'src', 'https://th.bing.com/th/id/OIP.yQ8BYLQc3L-QiVcBcxETvgHaLH?pid=ImgDet&rs=1');
        cy.get('#main-content-movies .movie-title:first .movie-title-release-year').should('have.text', '2026');
    });
});