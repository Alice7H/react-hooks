Este projeto possui exemplos usando axios, hooks e componentes de classe:

- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- hooks customizados
- useReducer com useContext
- useEffect com axios
- useReducer com axios

# Hook

É uma função especial que permite utilizar recursos do React, sem a necessidade de usar os métodos de ciclo de vida dos componentes de classe para executar algum código quando um componente é montado e desmontado.

## useState

É um hook que adiciona o estado do React a um componente de função.
Ele serve para atualizarmos um estado ou exibir o estado atual de um valor.

- Atualização de estado:
  `setCount(count + 1)`

- Exibição do estado:
  `<h1>{count}</h1>`

## useEffect

É um hook que faz busca de dados, configurações de inscrições e mudança no DOM.
Permite que execute efeitos colaterais em um componente, similar ao método de ciclo de vida em classes.

Ex: buscar o endereço completo, a cada novo CEP informado.

## useContext

É um hook para passar props para os componentes 'netos', 'bisnetos', sem precisar
passar pelo componente filho.

Ex: o componente pai passa cor de fundo e cor de texto para um componente neto.

## useReducer

É um hook que aceita um reducer e retorna o estado atual junto com um método dispatch.

É usado para lógicas de estado complexas com múltiplos sub-valores, ou o próximo estado precisa do estado anterior e possibilita otimização de performance de componentes que disparam atualizações profundas.

Ex: uso de switch case para ações de um botão de incremento, decremento e reset.

## useCallback

É um hook que retorna uma versão memoizada de uma função de callback
que muda apenas se uma das dependências mudar.

É usado quando passamos callbacks para otimizar componentes filhos que dependem da igualdade de referência para prevenir renderização desnecessária.

Para saber mais, olhe o exemplo do componente `ParentComponent` neste projeto.

## useMemo

É um hook que serve para recuperar um valor memorizado quando o array recebe uma atualização.

Se nenhum array for fornecido, um novo valor será calculado a cada renderização.

Para saber mais, olhe o exemplo do componente `Counter` neste projeto.

## useCallback e useMemo

O useCallback armazena em cache a própria instância de função fornecida, enquanto useMemo invoca funções fornecidas e armazena os resultados em cache.

- useCallback armazena a função
- useMemo armazena o resultado

## useRef

É um hook usado para obter referência a um nó DOM ou uma instância de um
componente em um aplicativo.

Pode ser usado para gerenciamento de foco, seleção de texto, ou reprodução de mídia e
também podemos detectar um clique fora de um elemento e acessar as props ou o estado anterior de um componente funcional.

Cada atualização nas variáveis de estado causa uma nova renderização do componente. O mesmo não acontece se usarmos refs, pois mudar propriedade .current não causará uma nova renderização.

## AXIOS

É uma biblioteca javascript usada para fazer solicitações HTTP, transforma respostas em json automaticamente, tem suporte a requisições assíncronas e possibilita criar instâncias, além de ser uma opção para quem não quer usar a Fetch API.
