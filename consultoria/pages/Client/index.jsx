import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile';
import EntrepriseProfile from '../EnterpriseProfile';

const Client = () => {
  const clients = [
    {
      id: 1,
      name: "Ana Santos",
      email: "teste@test.com",
      mobile: 81988693599,
      entreprise: [
        {
          cpfCnpj: 12345678910,
          razaoSocial: "Edficações LTDA",
          endereco: "Rua do jasmin",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
            { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
            { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
            { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
            { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
            { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
            { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
            { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
            { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
        {
          cpfCnpj: 222222222,
          razaoSocial: "Tech Team LTDA",
          endereco: "Rua do Leme",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
            { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
            { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
            { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
            { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
            { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
            { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
            { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
            { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Jesica Santana",
      email: "teste@test.com",
      mobile: 81988693599,
      entreprise: [
        {
          cpfCnpj: 4444444,
          razaoSocial: "Stefanini",
          endereco: "Rua do Cravo",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
            { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
            { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
            { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
            { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
            { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
            { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
            { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
            { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
        {
          cpfCnpj: 3333333,
          razaoSocial: "Globo",
          endereco: "Rua do Amarelo",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
            { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
            { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
            { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
            { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
            { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
            { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
            { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
            { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Well Nobre",
      email: "teste@test.com",
      mobile: 81988693599,
      entreprise: [
        {
          cpfCnpj: 888888888,
          razaoSocial: "Oi Telecom",
          endereco: "Rua da Alegria",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
          { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
          { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
          { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
          { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
          { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
          { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
          { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
          { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
        {
          cpfCnpj: 777777777,
          razaoSocial: "Vivo S/A",
          endereco: "Rua Paralela",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
          { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
          { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
          { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
          { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
          { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
          { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
          { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
          { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Yashina Gomes",
      email: "teste@test.com",
      mobile: 81988693599,
      entreprise: [
        {
          cpfCnpj: 4444444,
          razaoSocial: "Fync",
          endereco: "Rua do Cravo",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
            { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
            { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
            { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
            { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
            { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
            { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
            { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
            { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
        {
          cpfCnpj: 3333333,
          razaoSocial: "Globo",
          endereco: "Rua do Amarelo",
          telefone: "81-9887692454",
          documents: [
            { name: "LAS - licença ambiental simplificada", issuanceDate: "28/08/2023", expirationDate: "28/08/2025" },
          { name: "LP - Licença prévia", issuanceDate: "29/08/2023", expirationDate: "29/08/2024" },
          { name: "LI - Licença de instalação", issuanceDate: "30/08/2023", expirationDate: "30/08/2024" },
          { name: "LO - Licença de operação", issuanceDate: "31/08/2023", expirationDate: "31/08/2025" },
          { name: "LOC - Licença de operação corretiva", issuanceDate: "01/09/2023", expirationDate: "01/09/2024" },
          { name: "CR - Certificado de registro Exercito", issuanceDate: "02/09/2023", expirationDate: "02/09/2024" },
          { name: "CRC - Certificado de Registro Cadastral (Polícia Federal)", issuanceDate: "03/09/2023", expirationDate: "03/09/2025" },
          { name: "CLF - Certificado de Licença de Funcionamento", issuanceDate: "04/09/2023", expirationDate: "04/09/2024" },
          { name: "AE - Autorização Especial", issuanceDate: "05/09/2023", expirationDate: "05/09/2025" },
          ],
        },
      ],
    },
    // Adicionar outros clientes aqui...
  ];
  

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedClients, setExpandedClients] = useState(
    clients.reduce((acc, client) => {
      acc[client.id] = true;
      return acc;
    }, {})
  );
  const [expandedEnterpriseIndex, setExpandedEnterpriseIndex] = useState(-1);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setExpandedClients((prevExpandedClients) => ({})); // Reset all client accordions on search
    setExpandedEnterpriseIndex(-1); // Reset expanded enterprise accordion on search
  };

  const toggleClientAccordion = (clientId) => {
    setExpandedClients((prevExpandedClients) => ({
      ...prevExpandedClients,
      [clientId]: !prevExpandedClients[clientId],
    }));
    setExpandedEnterpriseIndex(-1); // Reset expanded enterprise accordion on client accordion click
  };

  const handleEnterpriseAccordionClick = (index) => {
    setExpandedEnterpriseIndex(index === expandedEnterpriseIndex ? -1 : index);
  };

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>Página do Cliente</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {clients.map((client) => (
        <div key={client.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <button onClick={() => toggleClientAccordion(client.id)}>
            {client.name} <Link to={`/profile/${client.id}`}>
                <button>Ver Perfil</button>
              </Link> {expandedClients[client.id] ? '▲' : '▼'}
          </button>
          {expandedClients[client.id] && (
            <div>
              {/* <p>Email: {client.email}</p>
              <p>Telefone: {client.mobile}</p> */}
              
              {/* <Link to={`/edit/${client.id}`}>
                <button>Editar Dados</button>
              </Link> */}
              <h2>Empresas:</h2>
              {client.entreprise.map((enterprise, index) => (
                <div key={index}>
                  <button onClick={() => handleEnterpriseAccordionClick(index)}>
                    {enterprise.razaoSocial}{' '}
                    {expandedEnterpriseIndex === index ? '▲' : '▼'}
                  </button>
                  {expandedEnterpriseIndex === index && (
                    <div>
                      <p>CNPJ: {enterprise.cpfCnpj}</p>
                      {/* <p>Razão Social: {enterprise.razaoSocial}</p>
                      <p>Endereço: {enterprise.endereco}</p>
                      <p>Telefone: {enterprise.telefone}</p> */}
                      <Link to={`/entrepriseProfile/${enterprise.cpfCnpj}`}>
      <button>Ver Perfil da Empresa</button>
    </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Client;