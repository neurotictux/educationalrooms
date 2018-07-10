Feature: Sala
  Para visualizar as salas
  Como usuário do sistema
  Quero gerenciar minhas salas e entrar em outras salas

  Scenario: Obter salas abertas
    Given Dado eu que queira obter as salas abertas
    When Quando eu buscar as salas abertas
    Then Então eu devo obter uma lista de salas abertas

  Scenario: Obter salas que me pertencem
    Given Dado que eu queira obter as salas que me pertencem
    When Quando eu buscar as salas que me pertencem
    Then Então eu devo obter uma lista de salas que me pertencem

  Scenario: Obter salas que participei
    Given Dado eu que queira obter as salas que participei
    When Quando eu buscar as salas que participei
    Then Então eu devo obter uma lista de salas que participei

  Scenario Outline: Obter minha sala
    Given Dado eu que queira obter minha sala
    When Quando eu obter uma sala com id <id>
    Then Então a sala deve ter status <status>

    Examples:
      | id | status       |
      | 2  | 'FINALIZADA' |
      | 4  | 'INICIADA'   |
      | 7  | 'ABERTA'     |
      | 8  | 'FECHADA'    |

  Scenario Outline: Entrar ou sair da sala
    Given Dado eu que queira entrar ou sair de uma sala
    When Quando eu entrar ou sair de uma sala <caso> atribuindo <propriedades>
    Then Então eu devo obter a mensagem <mensagem> depois de entrar ou sair da sala

    Examples:
      | caso                  | propriedades                      | mensagem                                  |
      | 'que não exista'      | '{ "id": 99 }'                    | "A sala não existe."                      |
      | 'que eu esteja'       | '{ "id": 6, "associate": true }'  | "Usuário já incluso na sala."             |
      | 'sala não aberta'     | '{ "id": 8, "associate": true }'  | "Sala não foi aberta ou já foi iniciada." |
      | 'sala já iniciada'    | '{ "id": 4, "associate": true }'  | "Sala não foi aberta ou já foi iniciada." |
      | 'que eu possa entrar' | '{ "id": 6, "associate": false }' | "Saiu da sala."                           |
      | 'que eu não esteja'   | '{ "id": 2, "associate": false }' | "Usuário não incluso na sala."            |
      | 'que eu possa entrar' | '{ "id": 6, "associate": true }'  | "Entrou na sala."                         |

  Scenario Outline: Salvar Sala
    Given Dado eu que queira salvar uma sala
    When Quando enviar <caso> atribuindo <propriedades>
    Then Então eu devo obter a mensagem <mensagem> depois de salvar a sala

    Examples:
      | caso                                      | propriedades                     | mensagem                                               |
      | 'sem nome da sala'                        | '{"name": ""}'                   | "Informe o nome da sala."                              |
      | 'que não existem'                         | '{"questions": [{ "id": 99 }] }' | "Há questões informadas que não existem."              |
      | 'que não pertencem ao usuário'            | '{"questions": [{ "id": 1 }] }'  | "Há questões informadas que não pertencem ao usuário." |
      | 'à uma sala que não existe'               | '{"id": 99}'                     | "A sala não existe."                                   |
      | 'à uma sala que não pertencem ao usuário' | '{"id": 3}'                      | "A sala informada não pertence ao usuário."            |
      | 'para atualização'                        | '{"id": 2}'                      | "Sala atualizada com sucesso."                         |
      | 'sem id da sala'                          | '{"id": 0}'                      | "Sala criada com sucesso."                             |

  Scenario Outline: Remover sala
    Given Dado que eu queira remover uma sala
    When Quando eu enviar o id de uma sala <caso> <id>
    Then Então eu devo obter a mensagem <mensagem> depois de tentar remover a sala

    Examples:
      | id | caso                  | mensagem                                                     |
      | 2  | 'que me pertence'     | "Sala removida com sucesso."                                 |
      | 3  | 'que não me pertence' | "Usuário sem permissão para remover o item."                 |
      | 99 | 'que não existe'      | "A sala não existe."                                         |
      | 4  | 'que não existe'      | "Uma sala iniciada que não finalizou não pode ser removida." |