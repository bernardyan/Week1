import {myFunction} from './index'
import { expect } from 'chai';


describe('Test myFunction', () => {

    it('Happy path: logs "Hello world!" when given "world"', () => {
        expect(myFunction("world")).to.equal('Hello world!');
    });

    it('Unexpected case', () => {
        expect(myFunction()).to.equal('Hello undefined!');
    });

});