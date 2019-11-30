import HealthImg from '../ui/images/health-category.jpg'

const ListOfCoaches = [
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'health',
    price: '£299',
    rating: 5,
    profile: 'id',
  },
  {
    name: 'Robin',
    photo: HealthImg,
    expertise: 'life',
    price: '£299',
    rating: 2,
    profile: 'id',
  },
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'nutrition',
    price: '£500',
    rating: 4,
    profile: 'id',
  },
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'relationship',
    price: '£500',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Robin',
    photo: HealthImg,
    expertise: 'feminity',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'financial',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Robin',
    photo: HealthImg,
    expertise: 'sports',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'health',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Robin',
    photo: HealthImg,
    expertise: 'health',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Jennifer',
    photo: HealthImg,
    expertise: 'health',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
  {
    name: 'Robin',
    photo: HealthImg,
    expertise: 'health',
    price: '£299',
    rating: 3,
    profile: 'id',
  },
]

const db = (param?: any): Promise<any> => {
  let list: any
  if (param) {
    list = ListOfCoaches.filter((coach) => coach.expertise === param)
  } else {
    list = ListOfCoaches
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(list), 500)
  })
}

export default db
