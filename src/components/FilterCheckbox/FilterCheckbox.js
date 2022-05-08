import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default FilterCheckbox;
