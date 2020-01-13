
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

chai.use(chaiHttp);

//Our parent block

describe('Tags', () => {
    describe('GET /api/v1/tags', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the tags', (done) => {
            chai.request(server)
                .get('/api/v1/category')
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
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