import React  from 'react';

import '../form.scss';

let it = 0;

export default (field) => {
  const name = 'i' + (field.input.name || it++);
  const id = (field.id ? field.id : `${field.meta.form}_${name}`).replace('.', '_');
  let inputClasses = 'form-control', inputGroupClasses = '', formGroupClasses = '';

  if (!field.meta.pristine || field.meta.submitFailed) {
    if (field.meta.valid) {
      inputClasses += ' is-valid';
      inputGroupClasses += ' is-valid';
    } else {
      inputClasses += ' is-invalid';
      inputGroupClasses += ' is-invalid';
    }
  }

  if(field.group) {
    formGroupClasses += ' input-group';
  }

  return (
    <div className={`form-group${formGroupClasses}`}>
      { field.label && <label htmlFor={id}>{field.label}</label> }
      { field.group &&
        <div className={`input-group-prepend`}>
          <div className={`input-group-text${inputGroupClasses}`}>{field.group}</div>
        </div>
      }
      <input
        {...field.input}
        type={field.type}
        id={id}
        placeholder={field.placeholder}
        className={inputClasses}
      />
      {field.children}
    </div>
  );
};