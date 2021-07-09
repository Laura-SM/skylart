import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadCategoriesFromApi, loadArtworksFromApi, loadCategory, loadDetail, login, logout,
} from './actionCreators';

jest.mock('axios');

describe('loadCategoriesFromApi function', () => {
  test('should dispatch LOAD_ARTWORKS', async () => {
    axios.mockResolvedValue({ data: { departments: { displayName: 'American Decorative Arts' } } });
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    const dispatch = jest.fn();
    await loadCategoriesFromApi(url)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: { displayName: 'American Decorative Arts' },
    });
  });
  test('should dispatch LOAD_ARTWORKS', async () => {
    axios.mockResolvedValue();
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    const dispatch = jest.fn();
    await loadCategoriesFromApi(url)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ERROR',
    });
  });
});

describe('loadArtworksFromApi function', () => {
  test('should dispatch LOAD_ARTWORKS', async () => {
    axios.mockResolvedValue({ data: { objectIDs: 10 } });
    const dispatch = jest.fn();
    await loadArtworksFromApi()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: 10,
    });
  });
  test('should dispatch LOAD_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    await loadArtworksFromApi()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ERROR',
    });
  });
});

describe('loadCategory function', () => {
  test('should dispatch LOAD_CATEGORY', async () => {
    axios.mockResolvedValue({ data: ['hello world'] });
    const dispatch = jest.fn();
    const artworkId = 10;
    await loadCategory(artworkId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_CATEGORY,
      detail: ['hello world'],
      artworkId: 10,
    });
  });
  test('should dispatch LOAD_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    const artworkId = 10;
    await loadCategory(artworkId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ERROR',
    });
  });
});

describe('loadDetail function', () => {
  test('should return action', () => {
    const detail = { name: 'ArtWorkName' };
    const expectedAction = {
      type: actionTypes.LOAD_DETAIL,
      detail,
    };
    expect(loadDetail(detail)).toEqual(expectedAction);
  });
});

describe('login function', () => {
  test('should create an action to login user', () => {
    const user = 'Laura';
    const expectedAction = {
      type: actionTypes.AUTH_LOGIN,
      user,
    };
    expect(login(user)).toEqual(expectedAction);
  });
});

describe('logout function', () => {
  test('should create an action to logout', () => {
    const expectedAction = {
      type: actionTypes.AUTH_LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
