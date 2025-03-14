import React from 'react';
import './App.css'; // Assuming you have the necessary CSS in App.css

function App() {
  return (
    <div className="App">
      <head>
        <title>GAME OVER</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Monoton&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      </head>

      <body style={{
        backgroundColor: 'black',
        height: '100vh',
        margin: 0,
        color: 'white'
      }}>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-body-light">
          <div className="container">
            <a className="navbar-brand me-2" href="./darkhome.php">
              <img
                src="game-removebg-preview.png"
                height="100"
                alt="Game Logo"
                loading="lazy"
              />
            </a>
            <a
              className="nav-link-light"
              href="#"
              style={{ color: 'whitesmoke', textDecoration: 'none' }}
            >
              Dashboard
            </a>
          </div>
        </nav>

        <h1 style={{
  fontFamily: 'Monoton, Arial, sans-serif',
  textAlign: 'left',
  color: '#bc6161',
  textShadow: '0 0 0 transparent, 0 0 20px rgb(255, 0, 0), 0 0 50px rgba(255, 0, 0,.5), 0 0 200px rgba(255, 0, 0, .5), 0 0 250px rgb(0, 0, 0), 0 0 300px rgba(255, 0, 0, 1), -100px -50px 50px rgba(255, 0, 0, 1)',
  animation: 'neon-blink 5s infinite alternate',
  fontSize: 'clamp(40px, 10vw, 85px)', // ⬅️ حجم متكيف
  marginBottom: 'clamp(20px, 5vw, 60px)', // ⬅️ المسافة متكيفة
  textTransform: 'uppercase',
  transform: 'skew(0, -12deg) rotateZ(5deg)',
  whiteSpace: 'nowrap', // يتغير عند الشاشات الصغيرة
}}>
  <strong>GAME OVER</strong> <br /> Arcade, Club
</h1>

<style>
  {`
    @media (max-width: 600px) {
      h1 {
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.8); /* تقليل التأثير */
        white-space: normal; /* يسمح بالكسر في الشاشات الصغيرة */
        text-align: center; /* جعل النص في المنتصف */
      }
    }

    @keyframes neon-blink {
      0% { opacity: 1; }
      100% { opacity: 0.8; }
    }
  `}
</style>

        <div className="container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>

        <section id="section3">
          <div className="card-group">
            <div className="card bg-transparent border-0">
              <img src="/snake.jpg" alt="Snake" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>snake xnezia</h3>
                <a href="games/snake.html" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>p<span className='faulty-letter'>L</span>ay</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="card bg-transparent border-0">
              <img src="/platformer.jpeg" alt="Platformer" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>platformer madness</h3>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>dis<span className='faulty-letter'></span></span>
                  </button>
                </a>
              </div>
            </div>

            <div className="card bg-transparent border-0">
              <img src="/x o .jpg" alt="Tic Tac Toe" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>tic tac toe</h3>
                <a href="/games/tictac.html" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>p<span className='faulty-letter'>L</span>ay</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          </section>
          <section id="section3">

          <div className="card-group">
            <div className="card bg-transparent border-0">
              <img src="/pixlr-image2.png" alt="Memory Star" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>memory star</h3>
                <a href="games/memory.html" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>p<span className='faulty-letter'>L</span>ay</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="card bg-transparent border-0">
              <img src="/math.jpeg" alt="Intelligence Math" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>intelligence math</h3>
                <a href="games/quiz.html" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>p<span className='faulty-letter'>L</span>ay</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="card bg-transparent border-0">
              <img src="/2048.jpeg" alt="Extreme Puzzle" className="card-img-top scor" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Rubik, Arial, sans-serif' }}>extreme puzzle</h3>
                <a href="games/puzzle.html" target="_blank" rel="noopener noreferrer">
                  <button className='glowing-btn'>
                    <span className='glowing-txt'>p<span className='faulty-letter'>L</span>ay</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default App;
