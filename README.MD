# API Champions League com Express

## Descrição
Um api para listar jogadores e clubes da Champions League, empregando o framework express .
Projeto desenvolvido no âmbito de treinamento em Node.js, na DIO, com o Professor Felipão.

##Domínio da aplicação

Jogadores e Clubes da Champions League.

## Features

A api deverá:

- listar os jogadores conforme medelo json dado pelo professor;
- selecionar um jogador;
- inserir um jogador;
- atualizar um jogador;
- deletar um jogador.
Em resumo, listar e fazer um CRUD completo de jogador.

- Listar todos os clubes conforme modelo json dado pelo professor;

## Formatos
A listagem de jogadores deverá devolver os jogadores como um array com a seguinte estrutura json

{
    "champions_league_players":[
        {
            "id": 1,
            "name": "Lionel Messi",
            "club": "Paris Saint-Germain",
            "nationality": "Argentina",
            "position": "Forward",
            "Statistics":{
                "Overall":93,
                "Pace": 85,
                "Shooting": 94,
                "Passing": 91,
                "Dribbling": 95,
                "Defending": 38,
                "Physical": 65
            }
        },
        {
            "id": 2,
            "name": "Cristiano Ronaldo",
            "club": "Manchester United",
            "nationality": "Portugal",
            "position": "Forward",
            "Statistics":{
                "Overall": 92,
                "Pace": 89,
                "Shooting": 93,
                "Passing": 82,
                "Dribbling": 88,
                "Defending": 35,
                "Physical": 78
            }
        },
        {
            "id": 3,
            "name": "Robert Lewandowski",
            "club": "Bayern Munich",
            "nationality": "Poland",
            "position": "Forward",
            "Statistics":{
                "Overall":91,
                "Pace": 80,
                "Shooting": 92,
                "Passing": 78,
                "Dribbling": 83,
                "Defending": 40,
                "Physical": 84
            }
        },
        {
            "id": 4,
            "name": "Kevin De Bruyne",
            "club": "Manchester City",
            "nationality": "Belgium",
            "position": "Midfielder",
            "Statistics":{
                "Overall":91,
                "Pace": 76,
                "Shooting": 85,
                "Passing": 92,
                "Dribbling": 87,
                "Defending": 62,
                "Physical": 79
            }
        },
    ]
}

A listagem de clubes deverá devolver os clubes como um array com a seguinte estrutura json

{
    "champions_league_clubs":[
        {
            "id": 1,
            "name": "Real Madrid",
        },
        {
            "id": 2,
            "name": "Barcelona",
        },
        {
            "id": 3,
            "name": "Manchester City",
        },
    ]
}


## 💻 Tecnologias
- Node.js
- JavaScript com TypeScript
- Express framework
- Thunder Client como simulador de client para testar as funcionalidades
  - GET http://localhost:3333/api/players
  - GET http://localhost:3333/api/players/nn
  - POST http://localhost:3333/api/players
      JSON Content
        {
          "id": 10, 
          "name": "Maradona", 
          "club": "Napole", 
          "nationality": "Argentina", 
          "position": "Atacante", 
          "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 94,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
          }
        }
  - PATCH http://localhost:3333/api/players/nn
      JSON Content
      {
        "Overall": 10,
        "Pace": 10,
        "Shooting": 10,
        "Passing": 10,
        "Dribbling": 10,
        "Defending": 10,
        "Physical": 10
      }
  - DELETE http://localhost:3333/api/players/nn
  - GET http://localhost:3333/api/clubs



## Author
Sérgio Santa Catarina.
Projeto desenvolvido seguindo o desenvolvimento do professor Felipe Aguiar da DIO.
