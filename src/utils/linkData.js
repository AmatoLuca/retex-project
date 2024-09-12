import avatar_1 from '../assets/images/avatar_1.png';
import avatar_2 from '../assets/images/avatar_2.jpg';
import avatar_3 from '../assets/images/avatar_3.jpg';
import frameImage from '../assets/images/frame.svg';
import arrowIcon from '../assets/images/arrow.svg';
import carImage_1 from '../assets/images/imageExample_4.jpg.jpeg';
import carImage_2 from '../assets/images/imageExample_7.jpg.jpeg';
import carImage_3 from '../assets/images/imageExample_8.jpg.jpeg';
import carImage_4 from '../assets/images/imageExample_3.jpg.jpeg';

export const linkData = [
  { id: 1, nome: 'Tutti i temi' },
  { id: 2, nome: 'Ambiente' },
  { id: 3, nome: 'Economia' },
  { id: 4, nome: 'Mondo' },
  { id: 5, nome: 'Non Profit' },
  { id: 6, nome: 'Politica' },
  { id: 7, nome: 'Società' },
  { id: 8, nome: 'Welfare' },
];

export const articleData = [
  {
    background: {
      isColorized: true,
      ground: '#E63036',
    },
    formnat: 'standard',
    frame: false,
    badge: {
      color: '#FFFFFF',
      text: 'Progetto Arca',
    },
    title: 'Qui Odessa”, fotografie, progetti e solidarietà',
    author: {
      avatar: avatar_1,
      name: 'Di Diletta Grella',
      date: '7 Luglio 2022',
      icon: arrowIcon,
    },
  },
  {
    background: {
      isColorized: false,
      ground: carImage_1,
    },
    formnat: 'standard',
    frame: false,
    badge: {
      color: '#E2F0F1',
      text: 'Adolescenti',
    },
    title:
      'Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne',
    author: {
      avatar: avatar_2,
      name: 'Di Luca Cereda',
      date: '13 Luglio 2022',
      icon: arrowIcon,
    },
  },
  {
    background: {
      isColorized: false,
      ground: carImage_2,
    },
    formnat: 'standard',
    frame: false,
    badge: {
      color: '#F0E2F1',
      text: 'Economia Civile',
    },
    title:
      'Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento',
    author: {
      avatar: avatar_3,
      name: 'Di Emiliano Moccia',
      date: '12 Luglio 2022',
      icon: arrowIcon,
    },
  },
  {
    background: {
      isColorized: false,
      ground: carImage_3,
    },
    formnat: 'standard',
    frame: frameImage,
    badge: {
      color: '#F0E2F1',
      text: 'Sport',
    },
    title: 'Troppi abusi nello sport minorile, il governo interviene',
    author: {
      avatar: avatar_1,
      name: 'Di Emiliano Moccia',
      date: '12 Luglio 2022',
      icon: arrowIcon,
    },
  },
  {
    background: {
      isColorized: false,
      ground: carImage_4,
    },
    formnat: 'large',
    frame: false,
    badge: {
      color: '#E2F0F1',
      text: 'Società',
    },
    title: 'Donne e nuove generazioni: con loro riparte l’Italia',
    author: {
      avatar: avatar_3,
      name: 'Di Anna Spena',
      date: '7 Luglio 2022',
      icon: arrowIcon,
    },
  },
];
