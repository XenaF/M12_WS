const axios = require('axios');
const { expect } = require('chai');

describe('Get response content-type', async() => {
        let response;
            before(async () => {
            response = await axios.get('https://jsonplaceholder.typicode.com/users');
        });

        it('Verify content-type', async() => {
            expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
        });
});
