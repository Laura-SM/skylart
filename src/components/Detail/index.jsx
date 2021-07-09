import React from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadDetail } from '../../redux/actions/actionCreators';
import GoBackButton from '../Common/GoBackButton';
import './Detail.scss';

function Detail({ dispatch, category, detail }) {
  const { artworkId } = useParams();
  const selectedArtwork = category.find((artwork) => artwork.objectID === +artworkId);
  dispatch(loadDetail(selectedArtwork));

  return (
    <>
      <div>
        <figure className="main-imatge-container">
          <img className="main-imatge" src={detail.primaryImage} alt={detail.title} />
        </figure>
        <h2>{detail.title}</h2>
      </div>
      <div className="detail-container">
        <div className="information-container">
          <h3>{detail.title}</h3>
          <h4>{detail.objectDate}</h4>
          <h4>{detail.artistDisplayName}</h4>
          <ul className="table-information">
            <li className="table-row">
              <span>Title:</span>
              {detail.title}
            </li>
            <li className="table-row">
              <span>Artist:</span>
              {detail.artistDisplayName}
            </li>
            <li className="table-row">
              <span>Date:</span>
              {detail.objectDate}
            </li>
            <li className="table-row">
              <span>Period:</span>
              {detail.period}
            </li>
            <li className="table-row">
              <span>Medium:</span>
              {detail.medium}
            </li>
            <li className="table-row">
              <span>Dimensions:</span>
              {detail.dimensions}
            </li>
            <li className="table-row">
              <span>Credit Line:</span>
              {detail.creditLine}
            </li>
            <li className="table-row">
              <span>Accession Number:</span>
              {detail.accessionNumber}
            </li>
          </ul>
          <div className="button-container">
            <GoBackButton />
          </div>
        </div>
        <div className="images-container">
          <img className="main-image" src={detail.primaryImage} alt={detail.title} />
        </div>
      </div>
    </>
  );
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  category: PropTypes.shape([]).isRequired,
  detail: PropTypes.shape({
    objectId: PropTypes.number,
    primaryImage: PropTypes.string,
    title: PropTypes.string,
    artistDisplayName: PropTypes.string,
    objectDate: PropTypes.string,
    period: PropTypes.string,
    medium: PropTypes.string,
    dimensions: PropTypes.string,
    creditLine: PropTypes.string,
    accessionNumber: PropTypes.string,
    additionalImages: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ category, detail }) {
  return {
    category,
    detail,
  };
}
export default connect(mapStateToProps)(Detail);
