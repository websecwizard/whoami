'use strict';

var data = data || {};

(function(module){

  module.hairColors = [
    'black',
    'brown',
    'auburn',
    'blonde',
    'red',
    'jet black',
    'dark brown',
    'light brown',
    'white',
    'grey',
    'silver'
  ];

  module.hairStyles = [
    'bald',
    'short-cropped',
    'shoulder-length',
    'long',
    'spiky',
    'wavy',
    'cornrows',
    'bobbed',
    'ponytail',
    'topknot',
    'waist-length',
    'buns',
    'braid',
    'mullet',
    'pigtails'
  ];

  module.eyeColors = [
    'amber',
    'blue',
    'brown',
    'hazel',
    'green',
    'emerald',
    'silver',
    'heterochromia'
  ];

  module.faceShapes = [
    'oval',
    'thin',
    'round',
    'chiseled',
    'square',
    'heart',
    'triangle'
  ];

  module.features = [
    'none',
    'freckles',
    'birthmark on left cheek',
    'birthmark near lips',
    'birthmark near left eye',   
    'scar on forehead',
    'burn marks on right cheek',
    'burn marks on hands',
    'scar on the chest',
    'scar across left eye',
    'dragon tattoo on the back',
    'bird tattoo on right shoulder',
    'snake tattoo',
    'ancor tattoo',
    'small raven tattoo',
    'arrow tattoo',
    'spikes tattoo',
    'flowers tattoo',
    'rune tattoo',
    'burnt mark on left shoulder',
    'cut off ear',
    'broken nose',
    'long sharp nails',
    'magic seal on the chest',
    'pierced brow',
    'pierced ears',
    'pierced nose',
    'pierced tongue'
  ];

  module.races = [
    {
      name: 'human',
      minHeight: {
        'male' : 5*12,
        'female': 4*12+7,
        'none': 4*12+7
      },
      maxHeight: {
        'male': 6*12+6,
        'female': 6*12+1,
        'none': 6*12+6
      },
      minBmi: 18,
      maxBmi: 30
    },
    {
      name: 'elf',
      minHeight: {
        'male' : 5*12+3,
        'female': 4*12+11,
        'none': 4*12+11
      },
      maxHeight: {
        'male': 6*12+1,
        'female': 5*12+9,
        'none': 6*12+1
      },
      minBmi: 16,
      maxBmi: 25
    },
    {
      name: 'dwarf',
      minHeight: {
        'male' : 3*12+11,
        'female': 3*12+9,
        'none': 3*12+9
      },
      maxHeight: {
        'male': 4*12+5,
        'female': 4*12+3,
        'none': 4*12+5
      },
      minBmi: 18,
      maxBmi: 30
    },
    {
      name: 'goblin',
      minHeight: {
        'male' : 2*12+9,
        'female': 2*12+7,
        'none': 2*12+7
      },
      maxHeight: {
        'male': 3*12+3,
        'female': 3*12+1,
        'none': 3*12+3
      },
      minBmi: 16,
      maxBmi: 25
    },
    {
      name: 'orc',
      minHeight: {
        'male' : 6*12+8,
        'female': 6*12+2,
        'none': 6*12+2
      },
      maxHeight: {
        'male': 8*12+6,
        'female': 8*12,
        'none': 8*12+6
      },
      minBmi: 25,
      maxBmi: 41
    }
  ];

  module.genders = [
    'male',
    'female',
    'none'
  ];

  module.orientations = [
    'straight',
    'gay',
    'bi'
  ];

  module.attitudes = [
    'confident',
    'contempuous',
    'devious',
    'proud',
    'optimistic',
    'pessimistic',
    'encouraging',
    'fair',
    'just',
    'religious',
    'humble',
    'honest'
  ];

  module.backgrounds = [
    'hunter',
    'warrior',
    'guard',
    'sellsword',
    'alchemist',
    'healer',
    'sailor',
    'thief',
    'merchant',
    'adventurer',
    'herder',
    'builder',
    'blacksmith',
    'artist',
    'lawyer',
    'bard',
    'gold digger',
    'treasure hunter',
    'brewer',
    'brigand',
    'butcher',
    'fence',
    'criminal mastermind',
    'carpenter',
    'mage',
    'warlock',
    'necromancer',
    'cartographer',
    'courtier',
    'gladiator',
    'innkeeper',
    'jailer',
    'prisoner',
    'dancer',
    'historian',
    'mayor',
    'torturer',
    'scavenger',
    'pirate',
    'herbalist',
    'counselor',
    'beggar',
    'aristocrat',
    'diplomat',
    'farmer',
    'scholar',
    'slave'
  ];

  module.hobbies = [
    'whittling',
    'carving',
    'cooking',
    'calligraphy',
    'darts',
    'tournaments',
    'fishing',
    'hunting',
    'painting',
    'pottery',
    'needlecraft',
    'archery',
    'knucklebones',
    'origami',
    'chess',
    'performance',
    'stargazing',
    'shopping',
    'gambling',
    'reading'
  ];

  module.traits = [
    'active',
    'arrogant',
    'anxious',
    'envious',
    'dedicated',
    'stable',
    'brave',
    'trusting',
    'meticulous',
    'fierce',
    'unkempt',
    'adventurous',
    'charismatic',
    'good-natured',
    'passionate',
    'loyal',
    'stoic'
  ];

  module.motivations = [
    'money',
    'power',
    'fame',
    'family',
    'friends',
    'revenge',
    'curiousity',
    'competition',
    'honour',
    'idealism',
    'independence',
    'acceptance',
    'freedom',
    'grades',
    'praise'
  ];

})(data);
