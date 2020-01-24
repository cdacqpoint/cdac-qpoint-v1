
/** 
 * @author Alisha Bilquis 
*/
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Category = require('../models/categoryModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);//Our parent block,the place where we export app of express @return serverobject

describe('Categories', () => {
    describe('GET /api/v1/categories', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the Categories', (done) => {
            chai.request(server)
                .get('/api/v1/categories')
                .end((err, res) => {
                    (res).should.have.status(200);//check status of api
                    done();
                });
        });
    });
});
describe('CategoriesFilteredPosts', () => {
    describe('GET /api/v1/posts?category=:category', async () => {
        const category = await Category.findOne({ name: "Javascript" }, '_id');
        const url = `/api/v1/posts?category=${category._id}`;
        //it => tells us what should be tested in this method
        it('it should GET all the posts under particular category', (done) => {
            chai.request(server)
                .get(url)
                .end((err, res) => {
                    (res).should.have.status(200);//check status of api
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.should.have.property('status').eql(true);
                    done();
                });
        });
    });
});



