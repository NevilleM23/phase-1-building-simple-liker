require ( './helpers.js' );

const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    let errorModal = document.querySelector('.hidden')
    expect(errorModal).not.to.equal(null)
  } )
} )
