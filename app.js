//          chave.  valor.
var rapha = { nome: "Rapha", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var leticia = { nome: "Leticia", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var will= { nome: "Will", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas;
  return pontos;
}

rapha.pontos = calculaPontos(rapha);
leticia.pontos = calculaPontos(leticia);
will.pontos = calculaPontos(will);

var jogadores = [rapha, leticia, will];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "<td><button onClick='adicionarZero(" + i + ")'>Zerar</button></td>"
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function calculaZeros(jogador) {
  var zerar = (jogador.vitorias * 0) + (jogador.empates * 0) + (jogador.derrotas * 0);
  return zerar;
}

rapha.pontos = calculaZeros(rapha);
leticia.pontos = calculaZeros(leticia);
will.pontos = calculaZeros(will);


function adicionarZero(i) {
  var jogador = jogadores[i];
  jogador.pontos = calculaZeros(jogador);
  jogador.vitorias = calculaZeros(jogador);
  jogador.empates = calculaZeros(jogador);
  jogador.derrotas = calculaZeros(jogador);
  exibeJogadoresNaTela(jogadores);
}