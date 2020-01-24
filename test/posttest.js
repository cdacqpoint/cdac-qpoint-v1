
/** 
 * @author Alisha Bilquis 
*/
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Post = require('../models/postModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);//Our parent block,the place where we export app of express @return serverobject

describe('PostbyID', () => {

    describe('GET /api/v1/post/:id', async() => {
        const tag = await Post.findOne({},'_id');
        const url = `/api/v1/post/${tag._id}`;
        //it => tells us what should be tested in this method
        it('it should GET post of given id', (done) => {

            chai.request(server)
                .get(url)
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
                    done();
                });
        });
    });
});
describe('DeletebyID', () => {
    describe('DELETE /api/v1/post/:id', () => {
        //it => tells us what should be tested in this method
        it('it should Delete given ID', (done) => {
            chai.request(server)
                .get('/api/v1/post/:id')
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
                    done();
                });
        });
    });
});


