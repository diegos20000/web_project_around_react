export default function EditProfile(onClose) {
  return (
    <div className="popup__card">
      <h3 className="popup__title">Editar perfil</h3>
      <form className="popup__form" noValidate id="form-profile">
        <input
          className="popup__input popup__text_title"
          type="text"
          placeholder="Nombre"
          minlength="2"
          maxlength="40"
          id="popup__input popup__input_name"
          name="name"
          required
        />
        <span className="popup__input-error popup__input_name-error"> </span>
        <input
          className="popup__input popup__text_about"
          type="text"
          placeholder="Acerca de mí"
          minlength="2"
          maxlength="40"
          id="popup__input popup__input_about"
          name="about"
          required
        />
        <span className="popup__input-error popup__input_about-error"> </span>
        <button
          className="popup__submit-btn popup__submit-btn_action_add pop-up__save-button"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
