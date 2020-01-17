
/** 
 * @author Alisha Bilquis 
*/
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block

describe('Tags', () => {
    describe('GET /api/v1/tags', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the tags', (done) => {
            chai.request(server)
                .get('/api/v1/tags')
                .end((err, res) => {
                    console.log(res.body);
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
describe('TagsFilteredPosts', () => {
    describe('GET /api/v1/tags/:tag/posts', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the posts under particular tag', (done) => {
            chai.request(server)
                .get('/api/v1/tags/:tag/posts')
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
                    done();
                });
        });
    });
});