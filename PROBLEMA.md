##Domínio da aplicação

Jogadores e Clubes da Champions League.

##Features

A api deverá:

- listar os jogadores conforme medelo json dado pelo professor;
- selecionar um jogador;
- inserir um jogador;
- atualizar um jogador;
- deletar um jogador.
Em resumo, listar e fazer um CRUD completo de jogador.

- Listar todos os clubes conforme modelo json dado pelo professor;

##Formato
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

