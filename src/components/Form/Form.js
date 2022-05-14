import { useFormWithValidation } from '../../utils/useForm';
import './Form.css';

const Form = ({ inputs, btnText, onSubmit, className = '' }) => {
  const {values, handleChange, errors, isValid} = useFormWithValidation();
  const formClassnames = `form ${className}`;

  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit(values)
  }

  return (
    <form className={formClassnames} onSubmit={handleSubmit}>
      <div className="form__inputs">
        {inputs.map((input) => (
          <div className='form__input-container' key={input.id}>
            <p className="form__label">{input.label}</p>
            <input
              name={input.name}
              value={values[input.name] || ''}
              onChange={handleChange}
              className="form__input"
              type={input.type}
              required={input.required}
              pattern={input.pattern}
            />
            <span className="form__error">{errors[input.name]}</span>
          </div>
        ))}
      </div>
      <button className="form__submit" type="submit" disabled={!isValid}>
        {btnText}
      </button>
    </form>
  );
};

export default Form;
