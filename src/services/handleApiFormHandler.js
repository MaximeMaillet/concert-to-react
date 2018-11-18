import { SubmissionError } from 'redux-form';

export default function process(error) {
  console.log('process error');
  console.log(error);

  let errors = {};
  if(error.data.error) {
    errors = {...error.data.error};
  }

  if(error.data && Array.isArray(error.data)) {
    errors = error;
  }

  throw new SubmissionError({
    _error: {
      ...errors,
    },
  });
}