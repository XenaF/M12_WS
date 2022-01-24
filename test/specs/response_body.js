const axios = require('axios');
const { expect } = require('chai');

describe('Get response body', async() => {
        let response;
            before(async () => {
            response = await axios.get('https://jsonplaceholder.typicode.com/users');
        });

        it('Verify response body', async() => {
            let usersAmount = await Object.entries(response.data).length;
            expect(usersAmount).to.be.equal(10);
        });
});
