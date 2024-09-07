import React, { useState } from 'react';
import style from './acordion.module.css';

const AccordionSubItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={style.accordionSubItem}>
      <div className={style.accordionSubTitle} onClick={onClick}>
        {title}
        <span className={style.accordionArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className={style.accordionSubContent}>{content}</div>}
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
      { title: 'Centro de Referência Clarice Lispector', content: 'Descrição Completa: O Centro de Referência Clarice Lispector oferece atendimento psicológico, social e jurídico para mulheres em situação de violência. A equipe é composta por profissionais especializados que acompanham e orientam as mulheres sobre seus direitos e os recursos disponíveis para enfrentamento da violência. O centro também realiza atividades de conscientização e apoio emocional. Serviços Oferecidos: Atendimento psicológico, Orientação jurídica, Acompanhamento social, Workshops e grupos de apoio Como Acessar: Endereço: Rua Bernadete Carneiro da Rocha, nº 69, bairro do Recife. Telefone: Liga Mulher (24 horas): 0800 281 0107 Plantão WhatsApp (24 horas): (81) 99488.6138 E-mail: contato@centroclaricelispector.pe Site: https://www2.recife.pe.gov.br/servico/centro-de-referencia-clarice-lispector Horário de funcionamento: Segunda a sexta, das 8h às 17h.' },
      { title: 'Casa da Mulher Brasileira', content: 'Descrição Completa: A Casa da Mulher Brasileira é um espaço integrado que oferece serviços especializados para mulheres vítimas de violência. Além do atendimento social e jurídico, a casa também proporciona suporte médico e programas de reintegração no mercado de trabalho, ajudando as mulheres a reconstruírem suas vidas. Serviços Oferecidos: Atendimento social, Orientação jurídica, Atendimento médico, Programas de emprego e capacitação Como Acessar: Endereço: Rua Doutor João Fernandes Vieira, 401, Boa Vista, Recife. Telefone: (81) 3182-7607 E-mail: contato@casamulherbrasileira.pe Site: https://www.casadamulherbrasileira.gov.br/' },
      { title: 'Delegacia da Mulher', content: 'Descrição Completa: As Delegacias da Mulher são unidades especializadas no atendimento a mulheres vítimas de violência doméstica e de gênero. Com equipes preparadas e treinadas, essas delegacias oferecem um atendimento sensível e dedicado, visando a proteção e a justiça para as vítimas. Serviços Oferecidos: Atendimento especializado, Registro de ocorrências, Acompanhamento de casos Como Acessar: Endereço: Rua Augusto Calheiros, s/n, Santo Amaro, Recife - PE, CEP: 50040-020 Telefone: (81) 4567-8901 E-mail: delegacia.mulher@recife.pe.gov.br Site: www.recife.com.br' },
      { title: 'Centro de Atendimento à Mulher em Situação de Violência (CAMV)', content: 'Descrição Completa: O CAMV oferece suporte psicológico, orientação jurídica e atendimento social especializado para mulheres que enfrentam violência doméstica. Além disso, realiza campanhas de conscientização e prevenção para promover a segurança e os direitos das mulheres. Serviços Oferecidos: Atendimento psicológico, Orientação jurídica, Campanhas de conscientização Como Acessar: Endereço: Rua do Atendimento, 606, Recife, PE Telefone: 0800 281 8187 (ligação gratuita) Telefone alternativo: (81) 3183-2963 E-mail: camv@violencia.pe.gov.br Site: https://www.secmulher.pe.gov.br/' }
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
