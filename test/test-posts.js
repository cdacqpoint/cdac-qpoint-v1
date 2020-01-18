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
describe('Posts', () => {
    beforeEach((done) => { //Before each test we empty the database
        Post.remove({}, (err) => {
            if (err) return err;
            done();
        });
    })
    //All GET requests on posts 
    describe('/GET posts', () => {
        it('should GET the post count & 1 latest posts.', (done) => {
            const limit = 0;
            const sort = 'latest';
            chai.request(server)
                .get(`/api/v1/posts?limit=${limit}&sort=${sort}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.should.have.property('data').have.property('posts_count');
                    res.body.should.have.property('data').have.property('posts').have.lengthOf(limit);
                    res.body.should.have.property('status').eql(true);
                    done();
                })
        });
    })

    /** 
     * Test the /POST route
     */
    describe('/POST posts', () => {
        it('it should not POST a post without title field', (done) => {
            let book = {
                desc: "<p>Test Under Progress</p>",
                courseTag: "DAC",
                categories: ["Java", "C++"],
                notify: false,
            }
            chai.request(server)
                .post('/api/v1/post/create')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.should.have.property('status').eql(false);
                    res.body.should.have.property('data').have.property('errors');
                    done();
                });
        });

        it('it should POST a post sucessfully ', (done) => {
            let book = {
                title: "Post Creation testing",
                desc: "<p>Test Under Progress</p>",
                courseTag: "DAC",
                categories: ["Java", "C++"],
                notify: false,
            }
            chai.request(server)
                .post('/api/v1/post/create')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('message').eql("Posted Successfully!");
                    done();
                });
        });
    });
}) 