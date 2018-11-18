import validate from 'validate.js';

export default function(data) {
  const constraints = {
    email: { email: true, presence: true },
    plainPassword: { length: { minimum: 5 }, presence: true },
    plainPasswordRepeat: {
      equality: 'plainPassword'
    },
  };

  return validate(data, constraints, { fullMessages: false })
}