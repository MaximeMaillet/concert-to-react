import api from '../../../services/api';
import errorHandler from '../../../services/handleApiFormHandler';

export default async function(values) {
  return api.authenticate.login(values).catch(errorHandler);
}