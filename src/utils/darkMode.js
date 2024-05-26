// darkMode.js

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');

};

// Guardar preferencia del modo en localStorage
const saveDarkModePreference = (isDarkMode) => {
  localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
};

// Cargar preferencia del modo desde localStorage
const loadDarkModePreference = () => {
  const darkModePreference = localStorage.getItem('dark-mode');
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

export { toggleDarkMode, loadDarkModePreference, saveDarkModePreference };
