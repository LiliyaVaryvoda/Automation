import superagent from "superagent";
import fs from 'fs'

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


    // it('post for user creating', async()=> {

    //     let requestBody= { "email":"55@555555555555.com","password":"55555555555555555","passwordRepeat":"55555555555555555","securityQuestion":{"id":9,"question":"Your ZIP/postal code when you were a teenager?","createdAt":"2021-12-16T12:07:57.492Z","updatedAt":"2021-12-16T12:07:57.492Z"},"securityAnswer":"79000"};

    //     const res = await superagent.post(baseUrl + 'api/Users/', requestBody);
    //     console.log('******************response*************' + JSON.stringify(res));
    //     console.log("********response status code**********" + res.statusCode);
    //     expect (res.statusCode).to.equal(201)
    // })

    //let mytoken
    // it('login with api', async()=> {

    //     let requestBody= {email: "55@655.com", password: "5556555"};

    //     const res = await superagent.post(baseUrl + 'rest/user/login', requestBody);
    //     //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!11", res);
    //     let mytoken = res.body.authentication.token;

    //     fs.writeFile('token.txt', mytoken, (err) => { 
      
    //         // In case of a error throw err. 
    //         if (err) throw err; 
    //     }) 


    //     //console.log('******************response*************' + JSON.stringify(res));
    //     //console.log("********response status code**********" + res.statusCode);
    //     expect (res.statusCode).to.equal(200)
    // })


    it('Checking POST  for adding product to basket', async () => {
        //fs.readFile("token.txt", "UTF8", function(err, mytoken) {
            //if (err) { throw err };
            let requestBody={"ProductId" : 42, "BasketId" : "6", "quantity" : 1};
            const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiI3QDcuY29tIiwicGFzc3dvcmQiOiJkYzBmYTdkZjNkMDc5MDRhMDkyODhiZDJkMmJiNWY0MCIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIxMjcuMC4wLjEiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNiAyMDozNjo1NC42ODkgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNiAyMDo0MjozNy4wNTUgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjM5Njg3Mzc3LCJleHAiOjE2Mzk3MDUzNzd9.FkVY6ueXF20dlUw8qO1lPEtCoryt93WaMvPXXO5J42djWy8A-8ETFwIvOKQIX3vYUQwWGT3ELoS93noMqVlUVtPvui4gYgU1CZ-u9mHee7LnuSwxQkZlwiIHeJbcye9A1VOrqOU0VH0DXgzxLsPrZOWxMX2m1pPhy05jNPAQGQ8")
            expect (response.statusCode).to.equal(200)
        //})

    })



    //     let requestBody={"ProductID" : 42, "BasketID" : "6", "quantity" : 1};
    //     const response = await superagent.post(baseUrl + 'api/BasketItems/').send(requestBody).set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6NDIsInVzZXJuYW1lIjoiIiwiZW1haWwiOiI1NUA1NTU1NTU1NTU1NS5jb20iLCJwYXNzd29yZCI6ImUzOTRhOGRiZTJjNDhmYmFhNDRlZjBiMWY3NTk1ZDY2Iiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjAuMC4wLjAiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xNiAxOTowMDo1Ny4yMDIgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xNiAxOTowMDo1Ny4yMDIgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjM5NjgxMjc4LCJleHAiOjE2Mzk2OTkyNzh9.ikxrJaxXFlFEfS51VAAQRSA1VeatH9IqCNqxjsQ-29siS31KwkCdXG7DIat6oJEclDFULIbCyNx_udYMU9mHS5JVrBznMTr3GmTTmzJRFMpF87U28rSG2wyCiY1DwHzHKs9NnjJqwyMiGQo_8hdX-4kQpIeQem9CJCONmIL-BHE")
    
    //     expect (response.statusCode).to.equal(200)
    // })
})
