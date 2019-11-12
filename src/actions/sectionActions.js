import { CALL_API, Schemas } from '../middleware/api';

export const SECTIONS_REQUEST = 'SECTIONS_REQUEST';
export const SECTIONS_SUCCESS = 'SECTIONS_SUCCESS';
export const SECTIONS_FAILURE = 'SECTIONS_FAILURE';

const fetchSections = (form, refetch) => ({
  form,
  [CALL_API]: {
    types: [SECTIONS_REQUEST, SECTIONS_SUCCESS, SECTIONS_FAILURE],
    endpoint: `forms/${form}/sections`,
    schema: Schemas.SECTION_ARRAY,
    refetch
  }
});

export const loadSections = (form, refetch) => (dispatch, getState) => {
  const { sectionsByForm } = getState().pagination;
  if (!sectionsByForm[form] || refetch) {
    dispatch(fetchSections(form, refetch));
  }
};

export const CREATE_SECTION_REQUEST = 'CREATE_SECTION_REQUEST';
export const CREATE_SECTION_SUCCESS = 'CREATE_SECTION_SUCCESS';
export const CREATE_SECTION_FAILURE = 'CREATE_SECTION_FAILURE';

const createSection = (data, formId) => ({
  [CALL_API]: {
    types: [CREATE_SECTION_REQUEST, CREATE_SECTION_SUCCESS, CREATE_SECTION_FAILURE],
    endpoint: `admin/forms/${formId}/sections`,
    schema: Schemas.SECTION,
    data
  }
});

export const submitSection = (values, formId, history) => async dispatch => {
  await dispatch(createSection(values, formId));
  dispatch(loadSections(formId, true));
  history.push(`/forms/${formId}`);
};

export const deleteSection = () => {};
