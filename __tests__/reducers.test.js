import usersReducer from '../static/js/reducers/users';
import userInformationReducer from '../static/js/reducers/userDetailInformation';
import * as types from '../static/js/constants/constants';

describe('Test all the reducers', () => {

    let ADD_USER_DETAIL_INFO, EMPTY_USER_INFO, DEFAULT = '';
    beforeAll(() => {
        ADD_USER_DETAIL_INFO = types["ADD_USER_DETAIL_INFO"];
        EMPTY_USER_INFO = types["EMPTY_USER_INFO"];
    });

    describe('Test the users reducer', () => {

        it('should return the initial state', () => {
            expect(usersReducer(undefined, {})).toEqual([]);
        });

    });

    describe('Test the userInformation reducer', () => {

        it('should return default state when passed EMPTY string for default action', () => {
            expect(
                userInformationReducer(
                    [
                        {"email":"handersonj@about.com","first_name":"Harry","gender":"Male","id":20,"last_name":"Anderson"}
                    ], 
                    {
                        type: DEFAULT
                    }
                )
            ).toEqual(
                [
                    {"email":"handersonj@about.com","first_name":"Harry","gender":"Male","id":20,"last_name":"Anderson"}
                ]
            );
        });

        it('should return EMPTY object when passed EMPTY_USER_INFO action', () => {
            expect(
                userInformationReducer(
                    [
                        {"email":"handersonj@about.com","first_name":"Harry","gender":"Male","id":20,"last_name":"Anderson"}
                    ], 
                    {
                        type: EMPTY_USER_INFO
                    }
                )
            ).toEqual({});
        });

        it('should add newer object properties when passed ADD_USER_DETAIL_INFO action', () => {
            expect(
                userInformationReducer(
                    [], 
                    {
                        "type": ADD_USER_DETAIL_INFO,
                        "email": "handersonj@about.com",
                        "firstName": "Harry",
                        "gender": "Male",
                        "id": 20,
                        "lastName": "Anderson"
                    }
                )
            ).toEqual(
                {"email":"handersonj@about.com","firstName":"Harry","gender":"Male","id":20,"lastName":"Anderson"}
            );
        });

    });

});