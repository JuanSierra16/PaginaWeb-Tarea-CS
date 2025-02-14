import React, { useContext } from 'react';
import './App.css';
import { LanguageContext } from './LanguageContext';

function App() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Textos en español e inglés
  const content = {
    es: {
      welcome: 'Bienvenido a Mi Página Web',
      description: 'Esta es una página de prueba en español.',
      toggleButton: 'Cambiar a Inglés',
      imagesTitle: 'Imágenes de Prueba',
    },
    en: {
      welcome: 'Welcome to My Web Page',
      description: 'This is a test page in English.',
      toggleButton: 'Switch to Spanish',
      imagesTitle: 'Test Images',
    },
  };

  const images = [
    { url: "https://picsum.photos/300/200?random=1", alt: "Random Image 1" },
    { url: "https://picsum.photos/300/200?random=2", alt: "Random Image 2" },
    { url: "https://picsum.photos/300/200?random=3", alt: "Random Image 3" }
  ];
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>{content[language].welcome}</h1>
        <p>{content[language].description}</p>
        <button onClick={toggleLanguage}>{content[language].toggleButton}</button>
      </header>

      <section>
        <h2>{content[language].imagesTitle}</h2>
        <div className="image-container">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.url}
              alt={image.alt}
              style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '10px' }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;