# Wallet

Wallet é um mini projeto de controle financeiro desenvolvido para praticar conceitos modernos de desenvolvimento front-end utilizando **React**, **TypeScript** e **TailwindCSS**.

A aplicação permite registrar transações financeiras e visualizar o resumo das movimentações, separando ganhos e despesas.

---

## Tecnologias Utilizadas

- React
- TypeScript
- TailwindCSS
- Vite

---

## Conceitos Praticados

Este projeto foi desenvolvido com foco em prática de arquitetura e organização de código no React.

Principais conceitos aplicados:

### Componentização
A interface foi dividida em diversos componentes reutilizáveis para manter o código organizado e facilitar manutenção.

### Context API
Utilização de **Context** para compartilhar o estado global das transações entre os componentes da aplicação.

### Reducers
Uso de **Reducers** para gerenciar o estado das transações de forma previsível e escalável.

### Estrutura de Pastas
Organização do projeto em pastas com responsabilidades bem definidas:

- **components** → componentes reutilizáveis
- **contexts** → gerenciamento de estado global
- **reducers** → lógica de atualização de estado
- **utils** → funções utilitárias
- **data** → dados fictícios utilizados na aplicação

### Funções Utilitárias
Foram criadas utilidades para:

- Formatar **datas**
- Converter **números para Real (R$)**
- Calcular totais financeiros

### Cálculos Financeiros
A aplicação calcula automaticamente:

- **Entradas (Income / Renda)**
- **Saídas (Expense / Despesas)**
- **Saldo total**

### Dados Mockados
Foi utilizada uma pasta `data` contendo:

- categorias
- itens fictícios

Esses dados simulam um pequeno banco de dados para testes da aplicação.

---

## Objetivo do Projeto

O objetivo deste mini projeto foi praticar:

- Estruturação de aplicações React
- Tipagem com TypeScript
- Gerenciamento de estado com Context + Reducer
- Organização de código
- Criação de funções utilitárias
- Estilização moderna com TailwindCSS

---

## Funcionalidades

- Adicionar nova transação
- Visualizar lista de transações
- Ver resumo financeiro
- Cálculo automático do saldo

---

## Projeto para Estudo

Este projeto foi desenvolvido como **exercício de prática** para aprimorar conhecimentos em React e arquitetura de aplicações front-end.

---

## Autor

Desenvolvido por **Davi Milioli**