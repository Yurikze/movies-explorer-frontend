import { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const formEvtHandler = (e) => {
    e.preventDefault();
    if (isEditMode) {
      console.log(123);

      setIsEditMode(false);
    } else {
      setIsEditMode(true);
    }
  };

  const formBtn = isEditMode ? (
    <button type="submit" className="profile__submit">
      Сохранить
    </button>
  ) : (
    <button className="profile__submit">Редактировать</button>
  );

  return (
    <section className="profile">
      <h1 className="profile__headline">Привет, Виталий!</h1>
      <form className="profile__form" onSubmit={formEvtHandler}>
        <div className="profile__input-container">
          <span className="profile__input-span">Имя</span>
          <input
            className="profile__input"
            type="text"
            placeholder="Введите имя"
            disabled={!isEditMode}
          />
        </div>
        <div className="profile__input-container">
          <span className="profile__input-span">E-mail</span>
          <input
            className="profile__input"
            type="email"
            placeholder="Введите email"
            disabled={!isEditMode}
          />
        </div>

        {formBtn}
      </form>
      <button className="profile__logout">Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;
