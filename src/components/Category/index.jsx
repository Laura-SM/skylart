import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
import { loadArtworksFromApi, loadCategory } from '../../redux/actions/actionCreators';
import './Category.scss';

let alreadyCalledId = [];
function Category({ dispatch, artworks, category }) {
  const { categoryId } = useParams();
  const departmentProp = categoriesToPrint.find((element) => element.id === +categoryId);
  useEffect(() => {
    if (!alreadyCalledId.includes(+categoryId)) {
      dispatch(loadArtworksFromApi(categoryId));
    }
  }, [categoryId]);
  useEffect(() => {
    if (!alreadyCalledId.includes(+categoryId)) {
      artworks.slice(1, 16).map((artworkId) => dispatch(loadCategory(artworkId)));
      alreadyCalledId = [...alreadyCalledId, +categoryId];
    }
  }, [artworks]);

  return (
    <>
      <ul className="category">
        {category.length && category.filter(
          (element) => departmentProp?.department === element.department,
        ).map((individualDetail) => (
          <Link
            to={`/detail/${individualDetail.objectID}`}
            className="category__item"
          >
            <img
              src={individualDetail.primaryImageSmall}
              alt={individualDetail.primaryImageSmall}
            />
            <li key={individualDetail.title}>
              <span className="detail-name">{individualDetail.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
  category: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks, category }) {
  return {
    artworks,
    category,
  };
}

export default connect(mapStateToProps)(Category);
