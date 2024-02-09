const name = 'Iron Man'
const experience = 1002

function getLevelByExperience(experience){
  if(experience < 1000){
    return 'Ferro'
  }
  
  if(experience > 1001 && experience < 2000){
    return 'Bronze'
  }
  if(experience > 2001 && experience < 5000 ){
    return 'Prata'
  }
  if(experience > 5001  && experience < 7000 ){
    return 'Ouro'
  }
  if(experience > 7001  && experience < 8000 ){
    return 'Platina'
  }
  if(experience > 8001  && experience < 9000 ){
    return 'Ascendente'
  }
  if(experience > 9001   && experience < 10000 ){
    return 'Imortal'
  }
  if(experience >= 10001 ){
    return 'Radiante'
  }
}

const level = getLevelByExperience(experience)


console.log(`O Herói de nome ${name} está no nível de ${level}`)