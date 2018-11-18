import validate from 'validate.js';

export default function(data) {
  const constraints = {
    email: { email: true, presence: true },
    password: { length: { minimum: 5 }, presence: true },
  };

  return validate(data, constraints, { fullMessages: false })
}