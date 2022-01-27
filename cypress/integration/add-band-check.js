/// <reference types="cypress" />

describe('bands test', () => {
    let addBandRequest;

    beforeEach(() => {
      cy.visit('http://localhost:5050/')
    })

    it('Add Band', () => {
        addBandRequest = {
            name: "MyBand",
            origin: 'IL',
            activeYears: 10,
            website: 'www.MyBand.com',
            isDisbanding: false
        };

        cy.get('[data-test=btn-add-band]').click();

        AddBand(addBandRequest);

        cy.location('pathname').should('include', 'show-bands');
        cy.wait(500);
        cy.get('.mat-cell.mat-column-name').contains(addBandRequest.name);
        cy.reload();
        removeBand(addBandRequest.name);
    });

    it('Add Band With Disbanding Year', () => {
        addBandRequest = {
            name: "MyBandDisband",
            origin: 'IL',
            activeYears: 5,
            website: 'www.MyBandDisband.com',
            isDisbanding: true,
            disbandingYear: '2020'
        };

        cy.get('[data-test=btn-add-band]').click();

        AddBand(addBandRequest);

        cy.location('pathname').should('include', 'show-bands');
        cy.wait(500);
        cy.get('.mat-cell.mat-column-name').contains(addBandRequest.name);
        cy.reload();
        removeBand(addBandRequest.name);
    });

    function AddBand(band){
        cy.get('[data-test=band-name]').type(band.name);
        cy.get('[data-test=band-origin]').type(band.origin);
        cy.get('[data-test=band-active-years]').type(band.activeYears);
        cy.get('[data-test=band-website]').type(band.website);

        if(band.isDisbanding){
            cy.get('[data-test=band-isDisbanding]').click();
            cy.get('[data-test=band-disbandingYear]').type(band.disbandingYear);
        }

        cy.get('[data-test=band-submit]').should('be.enabled').click();
    }

    function removeBand(bandName){
        cy.get('.mat-cell.mat-column-name').contains(bandName)
            .siblings('.mat-cell.mat-column-actions')
            .children('.btns-container')
            .children('[data-test=btn-band-remove]').click();
    }

})