import infoEvent from './assets/info-event.png'

export function App() {
  return (
    <main>
      <div>
        <h1>gere seu ticket e compartilhe com o mundo</h1>

        <div>
          <div>
            <label htmlFor="userName">Digite seu usuário do GitHub</label>
            <input type="text" placeholder="Nome de usuário" />
          </div>

          <button>Gerar meu ticket</button>
        </div>
      </div>

      <div>
        <div></div>
        <div>
          <img src="" alt="" />

          <div>
            <span>Tripulante</span>
            <span>Seu nome aqui</span>
          </div>

          <img src={infoEvent} alt="Imagem que detalha as informações do evento" />
        </div>
      </div>
    </main>
  );
}
