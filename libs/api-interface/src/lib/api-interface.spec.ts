import { API_URL } from './api-interface';

describe('API_URL', () => {
  it('should give /api', () => {
    expect(API_URL).toEqual('/api');
  });
});
