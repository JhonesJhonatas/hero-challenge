const name = 'Iron Man'
const experience = 9002
let level = ''

if(experience < 1000){
  level = 'Ferro'
}

if(experience > 1001 && experience < 2000){
  level = 'Bronze'
}
if(experience > 2001 && experience < 5000 ){
  level = 'Prata'
}
if(experience > 5001  && experience < 7000 ){
  level = 'Ouro'
}
if(experience > 7001  && experience < 8000 ){
  level = 'Platina'
}
if(experience > 8001  && experience < 9000 ){
  level = 'Ascendente'
}
if(experience > 9001   && experience < 10000 ){
  level = 'Imortal'
}
if(experience >= 10001 ){
  level = 'Radiante'
}


console.log(`O Herói de nome ${name} está no nível de ${level}`)