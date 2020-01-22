
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

describe('Get Posts by ID', () => {
    describe('GET /api/v1/post/:id', async () => {
        const post = await Post.findOne({});
        const url = `/api/v1/post/${post._id}`;
        //it => tells us what should be tested in this method
        it('it should GET post of given id', (done) => {
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
describe('Upvote Post by ID', () => {
    describe('GET /api/v1/post/:id/upvote', async () => {
        const post = await Post.findOne({});
        const url = `/api/v1/post/${post._id}/upvote`;
        //it => tells us what should be tested in this method
        it('it should Delete given ID', (done) => {
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


