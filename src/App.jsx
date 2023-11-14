import { useEffect, useState } from "react";
// import { useState } from "react";
import MeuComponente from "./components/MeuComponents";

import MeuContador from "./MeuContador";

const minhaLista = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legume' },
  { id: '3', value: 'Carne' },
];

const tarefas = [
  { id: '1', title: 'minha primeira tarefa' },
  { id: '2', title: 'minha segunda tarefa' },
  { id: '3', title: 'minha terceira tarefa' },
  { id: '4', title: 'minha quarta tarefa' },
];

function App() {
  const [produtos, setProdutos] = useState(minhaLista);

  const [pesquisa, setPesquisa] = useState('');

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    if (pesquisa) {
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista);
    }
  }, [pesquisa]);

  useEffect(() => {
    async function buscarDados(){
        const resultado = await fetch ('https://jsonplaceholder.typicode.com/todos')
        const resultadoFinal = await resultado.json()
        return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))
  }, [])

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

      <div>
        <h1>Efeitos colaterais</h1>
        <input
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          placeholder="pesquise aqui"
        ></input>
        {produtos.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.value}</h4>
            </div>
          );
        })}
      </div>

      <div>
        <h1>Buscando dados</h1>
        <ol>
          {tarefas.map((tarefas) => {
            return(
              <div>
                <li key={tarefas.id}>{tarefas.title}
                {tarefas.completed ? '- Tarefa Concluída' : null}</li>;
                
               </div>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

function MeuBotao(props) {
  return <button>{props.conteudo}</button>;
}

export default App;
