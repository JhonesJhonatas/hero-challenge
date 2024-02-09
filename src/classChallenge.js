class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;

      switch (this.tipo) {
          case 'mago':
              ataque = 'usou magia';
              break;
          case 'guerreiro':
              ataque = 'usou espada';
              break;
          case 'monge':
              ataque = 'usou artes marciais';
              break;
          case 'ninja':
              ataque = 'usou shuriken';
              break;
          default:
              ataque = 'usou força física';
      }
      console.log(`O ${this.tipo} ${ataque}`);
  }
}

const heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 200, 'mago');
const heroi3 = new Heroi('Bruce Lee', 33, 'monge');
const heroi4 = new Heroi('Naruto', 20, 'ninja');

heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar();
heroi4.atacar();
