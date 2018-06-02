import React  from 'react';

import '../form.scss';

let it = 0;

export default (field) => {
  const name = 'i' + (field.input.name || it++);
  const id = (field.id ? field.id : `${field.meta.form}_${name}`).replace('.', '_');

  let classes = `form-control ${field.className}` || '';
  if (field.meta.visited || !field.meta.pristine || field.meta.submitFailed) {
    if (field.meta.valid) {
      classes += ' is-valid';
    } else {
      classes += ' is-invalid';
    }
  }

  return (
    <div className="form-group">
      { field.label && <label htmlFor={id}>{field.label}</label> }
      <input
        {...field.input}
        type="password"
        id={id}
        placeholder={field.placeholder}
        className={classes}
      />
      {field.children}
    </div>
  );
};