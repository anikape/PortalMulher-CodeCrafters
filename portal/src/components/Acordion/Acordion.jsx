import React, { useState } from 'react';
import style from './acordion.module.css';

const AccordionSubItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={style.accordionSubItem}>
      <div className={style.accordionSubTitle} onClick={onClick}>
        {title}
        <span className={style.accordionArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={style.accordionSubContent}>
          <p><strong>Descrição Completa:</strong> {content.description}</p>
          <p><strong>Serviços Oferecidos:</strong></p>
          <ul>
            {content.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <p><strong>Como Acessar:</strong></p>
          <p><strong>Endereço:</strong> {content.address}</p>
          <p><strong>Telefone:</strong> {content.phone}</p>
          <p><strong>E-mail:</strong> <a href={`mailto:${content.email}`}>{content.email}</a></p>
          <p><strong>Site:</strong> <a href={content.website} target="_blank" rel="noopener noreferrer">{content.website}</a></p>
          <p><strong>Horário de Funcionamento:</strong> {content.hours}</p>
        </div>
      )}
    </div>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick, subItems }) => {
  const [isSubOpen, setIsSubOpen] = useState(null);

  const handleSubClick = (index) => {
    setIsSubOpen(isSubOpen === index ? null : index);
  };

  return (
    <div className={style.accordionItem}>
      <div className={style.accordionTitle} onClick={onClick}>
        {title}
        <span className={style.accordionArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className={style.accordionContent}>
          {content && <p>{content}</p>}
          {subItems && (
            <div className={style.subAccordion}>
              {subItems.map((subItem, index) => (
                <AccordionSubItem
                  key={index}
                  title={subItem.title}
                  content={subItem.content}
                  isOpen={isSubOpen === index}
                  onClick={() => handleSubClick(index)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: 'Educação', content: 'Em Breve' },
    { title: 'Jurídico', content: '', subItems: [
      {
        title: 'Centro de Referência Clarice Lispector',
        content: {
          description: "O Centro de Referência Clarice Lispector oferece atendimento psicológico, social e jurídico para mulheres em situação de violência. A equipe é composta por profissionais especializados que acompanham e orientam as mulheres sobre seus direitos e os recursos disponíveis para enfrentamento da violência. O centro também realiza atividades de conscientização e apoio emocional.",
          services: [
            "Atendimento psicológico",
            "Orientação jurídica",
            "Acompanhamento social",
            "Workshops e grupos de apoio"
          ],
          address: "Rua Bernadete Carneiro da Rocha, nº 69, bairro do Recife.",
          phone: "Liga Mulher (24 horas): 0800 281 0107 | Plantão WhatsApp (24 horas): (81) 99488.6138",
          email: "contato@centroclaricelispector.pe",
          website: "https://www2.recife.pe.gov.br/servico/centro-de-referencia-clarice-lispector",
          hours: "Segunda a sexta, das 8h às 17h."
        }
      },
      {
        title: 'Casa da Mulher Brasileira',
        content: {
          description: "A Casa da Mulher Brasileira é um espaço integrado que oferece serviços especializados para mulheres vítimas de violência. Além do atendimento social e jurídico, a casa também proporciona suporte médico e programas de reintegração no mercado de trabalho, ajudando as mulheres a reconstruírem suas vidas.",
          services: [
            "Atendimento social",
            "Orientação jurídica",
            "Atendimento médico",
            "Programas de emprego e capacitação"
          ],
          address: "Rua Doutor João Fernandes Vieira, 401, Boa Vista, Recife.",
          phone: "(81) 3182-7607",
          email: "contato@casamulherbrasileira.pe",
          website: "https://www.casadamulherbrasileira.gov.br/"
        }
      },
      {
        title: 'Delegacia da Mulher',
        content: {
          description: "As Delegacias da Mulher são unidades especializadas no atendimento a mulheres vítimas de violência doméstica e de gênero. Com equipes preparadas e treinadas, essas delegacias oferecem um atendimento sensível e dedicado, visando a proteção e a justiça para as vítimas.",
          services: [
            "Atendimento especializado",
            "Registro de ocorrências",
            "Acompanhamento de casos"
          ],
          address: "Rua Augusto Calheiros, s/n, Santo Amaro, Recife - PE, CEP: 50040-020",
          phone: "(81) 4567-8901",
          email: "delegacia.mulher@recife.pe.gov.br",
          website: "www.recife.com.br"
        }
      },
      {
        title: 'Centro de Atendimento à Mulher em Situação de Violência (CAMV)',
        content: {
          description: "O CAMV oferece suporte psicológico, orientação jurídica e atendimento social especializado para mulheres que enfrentam violência doméstica. Além disso, realiza campanhas de conscientização e prevenção para promover a segurança e os direitos das mulheres.",
          services: [
            "Atendimento psicológico",
            "Orientação jurídica",
            "Campanhas de conscientização"
          ],
          address: "Rua do Atendimento, 606, Recife, PE",
          phone: "0800 281 8187 (ligação gratuita) | (81) 3183-2963",
          email: "camv@violencia.pe.gov.br",
          website: "https://www.secmulher.pe.gov.br/"
        }
      }
    ]},
    { title: 'Saúde', content: 'Em Breve' },
    { title: 'Assistência social', content: 'Em Breve' },
    { title: 'Apoio psicológico', content: 'Em Breve' },
    { title: 'Empregabilidade', content: 'Em Breve' },
    { title: 'Empreendedorismo', content: 'Em Breve' },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={style.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          subItems={item.subItems}
        />
      ))}
    </div>
  );
};

export default Accordion;
