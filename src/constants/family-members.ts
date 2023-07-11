import { Item } from '../types';

export const FAMILY_ROOT_MEMBER: Item = {
  id: 0,
  name: '爷爷',
  children: [
    {
      id: 1,
      name: '爸爸',
      children: [
        {
          id: 4,
          name: '我',
          children: [
            {
              id: 8,
              name: '儿子',
            },
            {
              id: 9,
              name: '女儿',
            },
          ],
        },
        {
          id: 5,
          name: '妹妹',
        },
      ],
    },
    {
      id: 2,
      name: '二叔',
      children: [
        {
          id: 6,
          name: '堂哥',
        },
        {
          id: 7,
          name: '堂妹',
          children: [
            {
              id: 10,
              name: '侄子',
            },
            {
              id: 11,
              name: '侄女',
            },
          ],
        },
      ]
    },
    {
      id: 3,
      name: '三姑',
    },
  ],
}
