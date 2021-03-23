const getSleepHours = day => {
  if (day === 'monday'){
    return 5;
  } else if (day === 'tuesday') {
    return 5;
  } else if ( day === 'wednesday'){
    return 5;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 5;    
  } else {
    return 8;
  }
};

const getActualSleepHours = () =>  
getSleepHours('monday') 
+ getSleepHours('tuesday') 
+ getSleepHours('wednesday')
+ getSleepHours('thursday') 
+ getSleepHours('friday') 
+ getSleepHours('saturday') 
+ getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(); 
if (actualSleepHours > idealSleepHours){
  return `Você dormiu ${actualSleepHours} horas nessa semana, o que são mais do que as ${idealSleepHours} horas ideais.`
} else if (actualSleepHours === idealSleepHours) {
  return `Essa semana você dormiu ${actualSleepHours} horas, o que é suficiente por semana.`
} else if (actualSleepHours < 42){
  return `Cuidado!!! Você dormiu ${actualSleepHours} horas nessa semana. Isso é menos do que o mínimo necessário.`
}
else {
  return `Você dormiu ${actualSleepHours} horas, ou seja menos do que as ${idealSleepHours} horas ideiais por semana.`
}
};

console.log(calculateSleepDebt());



