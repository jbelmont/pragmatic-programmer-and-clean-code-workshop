import * as actions from '../static/js/actions/index';
import * as types from '../static/js/constants/constants';

describe('Test Action Creators', () => {

    let GET_USERS, ADD_USER_DETAIL_INFO;
    beforeAll(() => {
        GET_USERS = types["GET_USERS"];
        ADD_USER_DETAIL_INFO = types["ADD_USER_DETAIL_INFO"];
    });

    it('getUsers should create an action to get users', () => {
        const users = [
            {"email":"handersonj@about.com","first_name":"Harry","gender":"Male","id":20,"last_name":"Anderson"},
            {"email":"dpayne3@cdbaby.com","first_name":"Donna","gender":"Female","id":4,"last_name":"Payne"},
            {"email":"eelliott4@pen.io","first_name":"Emily","gender":"Female","id":5,"last_name":"Elliott"},
            {"email":"jtucker2@tripadvisor.com","first_name":"Jonathan","gender":"Male","id":3,"last_name":"Tucker"},
            {"email":"smedina1@addthis.com","first_name":"Sean","gender":"Male","id":2,"last_name":"Medina"},
            {"email":"jflores9@icq.com","first_name":"Joan","gender":"Female","id":10,"last_name":"Flores"},
            {"email":"kfisher8@wunderground.com","first_name":"Kenneth","gender":"Male","id":9,"last_name":"Fisher"},
            {"email":"nlynche@163.com","first_name":"Nancy","gender":"Female","id":15,"last_name":"Lynch"},
            {"email":"hkelly7@hubpages.com","first_name":"Heather","gender":"Female","id":8,"last_name":"Kelly"}
        ]
        const expectedAction = {
            type: GET_USERS,
            users
        };
        expect(actions.getusers({users})).toEqual(expectedAction);
    });

    it('addUserInfo should create an action that adds single user info to store', () => {
        const addUser = {
            "email": "handersonj@about.com",
            "firstName": "Harry",
            "gender": "Male",
            "id": 20,
            "lastName": "Anderson"
        };

        const expectedAction = {
            "type": ADD_USER_DETAIL_INFO,
            "email": "handersonj@about.com",
            "firstName": "Harry",
            "gender": "Male",
            "id": 20,
            "lastName": "Anderson"
        };
        expect(actions.getUserInfo(addUser)).toEqual(expectedAction);
    });
});