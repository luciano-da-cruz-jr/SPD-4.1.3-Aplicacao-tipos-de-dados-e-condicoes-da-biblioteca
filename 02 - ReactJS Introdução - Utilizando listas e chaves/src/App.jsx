import React from "react";

const listCustomer =
[
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['HTML', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Luciano da Cruz Junior',
    skills: ['HTML', 'CSS', 'JS']
  },
  {
    id: 4,
    name: 'Dayana Rangel de Souza da Cruz',
    skills: ['HTML', 'CSS']
  }
]

const App = () => 
{
  const renderCustomers = (customer, index) =>
  {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  

  const renderSkills = (skill, index) => 
  {
    return (
      <div style={{ paddingLeft: '30px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
        <p>Digital Innovation One</p>
        <p>Bem vindo a nossa aula =D.</p>
        <div>
          <ul>{listCustomer.map(renderCustomers)}</ul>
        </div>
    </div>
  );
};

export default App;
