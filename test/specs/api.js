import superagent from "superagent";
import chai from "chai";
const expect = chai.expect;


// // (async () => {
// //     try {
// //         const res = await superagent.get('http://localhost:3000/api/Feedbacks/');
// //         console.log(res)
// //     } catch (err) {
// //         console.log(err);
// //     }
// // })();


describe('API', () => {
    it('Checking GET feedbacks', async () => {
        const response = await superagent.get('http://localhost:3000/api/Feedbacks/');
        console.log("*********response" + response);
        console.log(response.statusCode);
        expect(response.statusCode).to.equal(200);
    })
})