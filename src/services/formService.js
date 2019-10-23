import api from 'api';

class FormService {
  static fetchFormCategories() {
    return api.get('form_categories');
  }
}

export default FormService;
