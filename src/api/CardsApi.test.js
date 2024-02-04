// api/CardsApi.test.js

import fetchCardData from './CardsApi';

describe('fetchCardData function', () => {
  test('fetches card data successfully', async () => {
    const data = await fetchCardData();
    
    // Add your assertions based on the expected data
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    // Add more assertions as needed
  });

});
