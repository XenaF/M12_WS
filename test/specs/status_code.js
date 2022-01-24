const axios = require('axios');
const { expect } = require('chai');

describe('Get http Status Code', async() => {
        let response;
            before(async () => {
            response = await axios.get('https://jsonplaceholder.typicode.com/users');
        });

        it('Verify Status Code is 200 OK', async() => {
            expect(response.status + ' ' + response.statusText).to.be.equal('200 OK');
        });
});
