import superagent from "superagent";

import chai from "chai";
const expect = chai.expect
// (async () => {
//     try{
//         const res = await superagent.get('http://localhost:3000/api/Feedbacks/');
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }) ();


describe('API testing', () => {

    let baseUrl = "http://localhost:3000/";
    // it('get for feedback', async()=> {
    //     const res = await superagent.get(baseUrl + 'api/Feedbacks/');
    //     console.log('******************response*************' + JSON.stringify(res));
    //     console.log("********response status code**********" + res.statusCode);
    //     expect (res.statusCode).to.equal(200)
    // })


    it('post for user creating', async()=> {

        let requestBody= { "email" : "7@7.com", "password" : "7777777", "passwordRepeat" : "7777777", "securityQuestion" : {"id":9, "question" : "Your ZIP/postal code when you were a teenager?","createdAt" : "2021-12-16T12:07:57.492Z","updatedAt" : "2021-12-16T12:07:57.492Z"}, "securityAnswer" : "79000"};

        const res = await superagent.post(baseUrl + 'api/Users/', requestBody);
        console.log('******************response*************' + JSON.stringify(res));
        console.log("********response status code**********" + res.statusCode);
        expect (res.statusCode).to.equal(200)
    })


    // it('Checking POST    for adding product to basket', async () => {
    //     let requestBody={"ProductID" : 42, "BasketID" : "6", "quantaty" : 1};
    //     const response = await superagent.post(baseUrl + 'api/BasketItems/', requestBody)
    
    //     expect (response.statusCode).to.equal(201)
    // })
})
