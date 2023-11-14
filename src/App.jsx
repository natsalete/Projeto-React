import MeuComponente from "./components/MeuComponents";

import MeuContador from "./MeuContador";

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      {/* <CardDePrograma image='' titulo= 'credit suiss' subtitle='pytho'/> */}

      <MeuBotao conteudo="me clique" />

      <MeuBotao conteudo="depois aqui" />

      <MeuBotao conteudo="e por fim aqui" idade={2} />

      <div>
        <h1>Estados e eventos</h1>

        <MeuContador />
      </div>

    </div>
  );
}

function MeuBotao(props) {
  return <button>{props.conteudo}</button>;
}

export default App;
