import { SubmissionError } from 'redux-form';

export default function process(error) {
  if(error.data.error) {
    error.data = error.data.error;
  }

  throw new SubmissionError({
    status: error.status,
    message: error.data,
  });
}