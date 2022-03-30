export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_REVIEW_MODAL = 'OPEN_REVIEW_MODAL'

export const openModal = ({modal}) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openReviewModal = ({modal, payload = null}) => {
  return {
    type: OPEN_REVIEW_MODAL,
    modal,
    payload: payload
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
