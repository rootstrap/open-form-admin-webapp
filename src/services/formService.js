import api from 'api';

class FormService {
  static fetchFormCategories() {
    return api.get('form_categories');
  }

  static createForm({ name, category }) {
    return api.post(`/admin/form_categories/${category}/forms`, {
      name,
      version: 1
    });
  }
}

export default FormService;
