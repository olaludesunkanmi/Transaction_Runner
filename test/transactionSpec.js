const { describe, it } = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");
const app = require("../index");

chai.use(chaiHttp);
chai.should();
dotenv.config();

let accessToken;

describe("Add money to balance", () => {
  it("user should be able to receive money", (done) => {
    const value = {
      amount: 2000,
    };
    chai
      .request(app)
      .post("/api/v1/transaction/addmoney")
      .set("Authorization", "Bearer " + accessToken)
      .send(value)
      .end((err, res) => {
        if (res.body.status === 201) {
          res.should.have.status(201);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(201);
          res.body.should.have.property("data");
        } else if (res.body.status === 403 || res.body.status === 404) {
          res.should.have.status(403 || 404);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(403 || 404);
          res.body.should.have.property("message");
        } else {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(500);
          res.body.should.have.property("message");
        }
        done();
      });
  });
});

// Send Money
describe("Send money", () => {
  it("user should be able to send money", (done) => {
    const value = {
      amount: 2000,
    };
    chai
      .request(app)
      .post("/api/v1/transaction/sendmoney")
      .set("Authorization", "Bearer " + accessToken)
      .send(value)
      .end((err, res) => {
        if (res.body.status === 201) {
          res.should.have.status(201);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(201);
          res.body.should.have.property("data");
        } else if (res.body.status === 403 || res.body.status === 404) {
          res.should.have.status(403 || 404);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(403 || 404);
          res.body.should.have.property("message");
        } else {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(500);
          res.body.should.have.property("message");
        }
        done();
      });
  });
});

// VIEW TRANSACTION
describe("Viewing a transaction", () => {
  it("user should be able to view his/her transaction", (done) => {
    chai
      .request(app)
      .get("/api/v1/transaction")
      .set("Authorization", "Bearer " + accessToken)
      .end((err, res) => {
        if (res.body.status === 200) {
          res.should.have.status(200);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(200);
          res.body.should.have.property("data");
        } else {
          res.should.have.status(403 || 404);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(403 || 404);
          res.body.should.have.property("message");
        }
        done();
      });
  });
});

// DELETE TRANSACTION
describe("Delete transactions", () => {
  it("user should be able to delete transactions", (done) => {
    chai
      .request(app)
      .delete("/api/v1/transaction")
      .set("Authorization", "Bearer " + accessToken)
      .end((err, res) => {
        if (res.body.status === 200) {
          res.should.have.status(200);
          res.should.be.an("object");
          res.body.should.have.property("status").eql(200);
          res.body.should.have.property("data");
        } else if (res.body.status === 403 || res.body.status === 404) {
          res.should.have.status(403 || 404);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(403 || 404);
          res.body.should.have.property("message");
        } else {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql(500);
          res.body.should.have.property("message");
        }
        done();
      });
  });
});
