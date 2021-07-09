import detailReducer from './detailReducer';
import authReducer from './authReducer';
import artworksReducer from './artworksReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a detail Reducer', () => {
  describe('With Action Type LOAD_DETAIL', () => {
    test('Should return ArtWorkName', () => {
      expect(detailReducer({}, {
        type: actionTypes.LOAD_DETAIL,
        detail: { name: 'ArtWorkName' },
      })).toEqual(
        { name: 'ArtWorkName' },
      );
    });
  });
});

describe('Given a auth Reducer', () => {
  describe('With Action Type AUTH_LOGIN', () => {
    test('Should return user.name=Anna', () => {
      expect(authReducer({}, {
        type: actionTypes.AUTH_LOGIN,
        user: { name: 'Anna' },
      })).toEqual({
        isLoggedIn: true,
        user: { name: 'Anna' },
      });
    });
  });

  describe('With Action Type AUTH_LOGOUT', () => {
    test('Should return user.name=Anna', () => {
      expect(authReducer({}, {
        type: actionTypes.AUTH_LOGOUT,
        user: { name: 'Anna' },
      })).toEqual({
        isLoggedIn: false,
        user: null,
      });
    });
  });
});

describe('Given a artworks Reducer', () => {
  describe('With Action Type LOAD_ARTWORKS', () => {
    test('Should return ArtWorkName', () => {
      expect(artworksReducer({}, {
        type: actionTypes.LOAD_ARTWORKS,
        artwork: [12345, 39025, 33641],
      })).toEqual(
        [12345, 39025, 33641],
      );
    });
  });
});

describe('Given a category Reducer', () => {
  describe('With Action Type LOAD_CATEGORY', () => {
    test('Should return new category array', () => {
      expect(artworksReducer([{ name: 'Anna' }, { name: 'Laura' }], {
        type: actionTypes.LOAD_CATEGORY,
        detail: { name: 'David' },
      })).toEqual([{ name: 'Anna' }, { name: 'Laura' }],
        [{ name: 'David' }]);
    });
  });
});
