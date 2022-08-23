import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Clientes</button>

const hasCustomer = true; //Editando esta linha modifica o que é renderizado!

const App = () => 
{
  const renderShowHistory = () =>
  (
    <div>
      Clique no botão abaixo para visualizar o histórico dos Clientes
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = () =>
  (
    <div>
      Clieque abaixo para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  )

  const ShowCustomer = () =>
  {
    if(!hasCustomer) return null

    return (
      <div>
        <h1>Nome do Cliente: Bruno Carneiro</h1>
      </div>
    )
  }

  console.log ('hasCustomer', hasCustomer)

  return (
    <div>
        <p>Digital Innovation One</p>
        <p>Bem vindo a nossa aula =D.</p>
        {hasCustomer ? renderShowHistory : renderAddCustomer()}
        <div>
          {ShowCustomer()}
        </div>
    </div>
  );
};

export default App;
