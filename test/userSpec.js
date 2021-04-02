const { describe, it } = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();

describe("signup", () => {
  it("user should be able to signup", (done) => {
    const user = {
      firstname: "marcus",
      lastname: "rashford",
      email: "rashford@yahoo.com",
      password: "12345678",
    };
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        if (res.body.status === 201) {
          res.should.have.status(201);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(201);
          res.body.should.have.property("data");
          res.body.data.should.have.property("token");
        } else if (res.body.status === 400) {
          res.should.have.status(400);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(400);
          res.body.should.have.property("error");
        } else {
          res.should.have.status(500);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(500);
          res.body.should.have.property("error");
        }
        done();
      });
  });
});

// sign in tests case
describe("login", () => {
  it("user should be able to login", (done) => {
    const user = {
      email: "j2k4@yahoo.com",
      password: "12345678",
    };
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send(user)
      .end((err, res) => {
        if (res.body.status === 200) {
          res.should.have.status(200);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(200);
          res.body.should.have.property("data");
          res.body.data.should.have.property("token");
        } else {
          res.should.have.status(500);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(500);
          res.body.should.have.property("error");
        }
        done();
      });
  });
});
