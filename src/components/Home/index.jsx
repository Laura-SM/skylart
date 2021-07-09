import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategoriesFromApi } from '../../redux/actions/actionCreators';
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
import { urlDepatments } from '../../redux/store/constants/urls';
import './Home.scss';
import image1 from '../../assets/home-image:1.jpeg';
import image5 from '../../assets/home-image:5.jpeg';
import image6 from '../../assets/home-image:6.jpeg';
import image10 from '../../assets/home-image:10.jpeg';
import image11 from '../../assets/home-image:11.jpeg';
import image13 from '../../assets/home-image:13.jpeg';

function Home({ dispatch, artworks }) {
  useEffect(() => {
    dispatch(loadCategoriesFromApi(urlDepatments));
  }, []);

  function findfavoriteIdDepartment(idToMatch) {
    return categoriesToPrint.some((favoriteValue) => idToMatch === favoriteValue.id);
  }

  return (
    <>
      <ul className="category-list">
        {
          artworks.length && artworks.map(
            ({ displayName, departmentId }) => findfavoriteIdDepartment(departmentId)
              && (
                <Link
                  to={`/category/${departmentId}`}
                  className="category-list__item"
                >
                  {departmentId === 1 && <img src={image1} alt="American Decorative" className="category-list__img" />}
                  {departmentId === 5 && <img src={image5} alt="Arts of Africa" className="category-list__img" />}
                  {departmentId === 6 && <img src={image6} alt="Asian Art" className="category-list__img" />}
                  {departmentId === 10 && <img src={image10} alt="Egiptian Art" className="category-list__img" />}
                  {departmentId === 11 && <img src={image11} alt="European Paintings" className="category-list__img" />}
                  {departmentId === 13 && <img src={image13} alt="Greek and Roman" className="category-list__img" />}
                  <li key={displayName}>
                    <span className="category-name">{displayName}</span>
                  </li>
                </Link>
              ),
          )
        }
      </ul>
    </>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks }) {
  return {
    artworks,
  };
}

export default connect(mapStateToProps)(Home);
