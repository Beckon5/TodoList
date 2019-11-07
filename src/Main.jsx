import React, { useState } from "react";
import "./App.css";
import { useTranslation} from 'react-i18next';
import Todo from "./components/Todo/Todo.js";
const Main = props => {
  const [inputText, setInputText] = useState("");
  const { toDos, addTodo, checkAll } = props;

  const [onlyActive, setOnlyActive] = useState(false);
  const [onlyInactive, setOnlyInactive] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="todo-main">
       <button className="lang-btn" onClick={() => changeLanguage('ru')}>ru</button>
        <button className="lang-btn" onClick={() => changeLanguage('en')}>en</button>
      <p className="todo-main__title">{t('title')}...</p>
      <div className="todo-main__input-field">
        <button className="check-all" onClick={() => checkAll()}>
          {t('all')}
        </button>
        <input
          className="input"
          type="text"
          placeholder={t('inputPlaceholder')}
          value={inputText}
          onChange={event => {
            setInputText(event.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              if (toDos.length < 1)
                addTodo({
                  id: 0,
                  checked: false,
                  text: inputText
                });
              else
                addTodo({
                  id: toDos[toDos.length - 1].id + 1,
                  checked: false,
                  text: inputText
                });
              setInputText("");
            }
          }}
        />
      </div>
      <Todo onlyActive={onlyActive} onlyInactive={onlyInactive} />
      <div className="filter-btns">
        <button
          className="btn"
          onClick={() => {
            setOnlyActive(false);
            setOnlyInactive(false);
          }}
          
        >
          
          {t('all')}
        </button>
        <button
          className="btn"
          onClick={() => {
            setOnlyInactive(false);
            setOnlyActive(true);
          }}
        >
          {t('completed')}
        </button>
        <button
          className="btn"
          onClick={() => {
            setOnlyActive(false);
            setOnlyInactive(true);
          }}
        >
          {t('inProgress')}
        </button>
      </div>
    </div>
  );
};

export default Main;
