import mocha from 'mocha'
const {describe, it} = mocha
import chai from 'chai'
const { expect } = chai
import sinon from 'sinon'
import TerminalController from '../src/terminalController.js';

import validDatabase from './mocks/validDatabase.json'
const mocks = {
    validDatabase,
}

describe('TerminalControllerClass',()=>{
    let sandbox = {};
    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })
    it('Simple testing', ()=>{
        const terminal = new TerminalController();
       console.log(mocks.validDatabase)
    })
})