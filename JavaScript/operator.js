document.write('<br>');
// example
const new_age = 20;
const isSingle = true;

if (new_age >=20 && isSingle) {
      document.write('you can marry');
} else{
      document.write('you cannot marry');
}
document.write('<br>')
// calculate avrage (n1+n2+n3/3)
// if avrage >=20 , you won , otherwise you lost
const n1 = 10;
const n2 = 5;
const n3 = 10;
avrage = (n1+n2+n3/3);

if (avrage >=20) {
      document.write('you pass')
} else{
      document.write('you fail');
}
document.write('<br>')
// switch case
const day = 'saturday'
switch (day) {
      case 'sunday':
      document.write('its a woking day');
      break;
       case 'monday':
      document.write('its a woking day');
      break;
      case 'tuesday':
      document.write('its a woking day');
      break;
      case 'wednesday':
      document.write('its a woking day');
      break;
      case 'thursday':
      document.write('its a woking day');
      break;
      case 'friday':
      document.write('its a woking day');
      break;
            
            
      default:
      document.write('its a holiday');
}
