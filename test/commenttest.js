/** 
@author  Dhiraj Chordiya
*/
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let Comments = require('../models/commentModel')


chai.use(chaiHttp);

describe('Comments',()=> {
    describe('GET /api/v1/comments', ()=> {
        it('it should get all comments',(done) =>{
            chai.request(server)
                .get('/api/v1/comments')
                .end((err, res) => {
                    (res).should.have.status(200);//check status of api
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    res.body.should.have.property('status').eql(true);
                    done();
                });   
        });
    });
});




