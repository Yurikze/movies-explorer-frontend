import './Form.css';

const Form = ({ inputs, btnText, className = '' }) => {
  const formClassnames = `form ${className}`;

  return (
    <form className={formClassnames}>
      <div className="form__inputs">
        {inputs.map((input) => (
          <>
            <p className="form__label">{input.label}</p>
            <input className="form__input" key={input.id} type={input.type} />
            <span className="form__error"></span>
          </>
        ))}
      </div>
      <button className="form__submit" type="submit">
        {btnText}
      </button>
    </form>
  );
};

export default Form;
