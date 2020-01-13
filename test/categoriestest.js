
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

describe('Categories', () => {
    describe('GET /api/v1/category', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the Categories', (done) => {
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
describe('CategoriesFilteredPosts', () => {
    describe('GET /api/v1/category/:id/posts', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the posts under particular category', (done) => {
            chai.request(server)
                .get('/api/v1/category/:id/posts')
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
                    done();
                });
        });
    });
});



