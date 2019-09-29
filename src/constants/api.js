const API = 'http://api.stackexchange.com/2.2';
const API_USERS = `${API}/users`;

export const API_SEARCH = `${API}/search/advanced?order=desc&sort=activity&q=:query&site=stackoverflow`;
export const API_USER_QUESTIONS = `${API_USERS}/:userName/questions?order=desc&sort=votes&site=stackoverflow`;
export const API_QUESTIONS_BY_TAG = `${API}/questions?order=desc&sort=activity&tagged=:tag&site=stackoverflow`;
