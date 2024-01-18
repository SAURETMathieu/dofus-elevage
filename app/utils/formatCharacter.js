const dayjs = require('dayjs');
// eslint-disable-next-line import/extensions
require('dayjs/locale/fr');

function formatDayTime(date, locale) {
  const dayFormat = dayjs(date).locale(locale).format('dddd');
  return dayFormat.charAt(0).toUpperCase() + dayFormat.slice(1);
}

function formatDate(date, locale) {
  return dayjs(date).locale(locale).format('DD/MM/YY');
}

function formatHours(date, locale) {
  return dayjs(date).locale(locale).format('HH[h]mm');
}

function formatCharacter(character) {
  character.account.user.password = null;

  let dayRepro = 'null';
  let dateRepro;
  let hoursRepro;
  let dayBirth = 'null';
  let dateBirth;
  let hoursBirth;
  let condition = 'Feconde';

  const time = new Date(character.date).getTime();
  const timestamp = new Date(character.dateBirth).getTime();

  if (character.date) {
    if (!dayjs(character.dateBirth).isBefore(dayjs(), 'minute')) {
      condition = 'Fecondee';
    }
    dayRepro = formatDayTime(character.date, 'fr');
    dateRepro = formatDate(character.date, 'fr');
    hoursRepro = formatHours(character.date, 'fr');

    dayBirth = formatDayTime(character.dateBirth, 'fr');
    dateBirth = formatDate(character.dateBirth, 'fr');
    hoursBirth = formatHours(character.dateBirth, 'fr');
  }

  if (character.reproduction > 19) {
    condition = 'Sterile';
  }

  return {
    ...character.toJSON(),
    dayRepro,
    dateRepro,
    hoursRepro,
    dayBirth,
    dateBirth,
    hoursBirth,
    condition,
    timestamp,
    time,
  };
}

module.exports = formatCharacter;
