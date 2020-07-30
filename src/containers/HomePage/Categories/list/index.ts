import HealthImg from '../../../../ui/images/health-category-coach.jpg'
import CareerImg from '../../../../ui/images/career-category-coach.jpg'
import LifeImg from '../../../../ui/images/life-category-coach.jpg'
import FeminityImg from '../../../../ui/images/femininity-category-coach.jpg'
import FinanceImg from '../../../../ui/images/finance-category-coach.jpg'
import RelationshipImg from '../../../../ui/images/relationship-category-coach.jpg'

interface Category {
  url: string,
  imgSrc: string,
  title: string,
  description: string
}

const list: Category[] = [
  {
    url: '/coaches/life',
    imgSrc: LifeImg,
    title: 'Life',
    description: `Improve any area of your life with the guidance 
    and support of your coach so you can reach your goals.`,
  },
  {
    url: '/coaches/health',
    imgSrc: HealthImg,
    title: 'Health',
    description: `Achieve a happier, healthier life through understanding how to 
    make better choices and changing your habits around food, fitness, stress levels and your wellbeing.`,
  },
  {
    url: '/coaches/career',
    imgSrc: CareerImg,
    title: 'Career',
    description: 'Identify and achieve your career ambitions with confidence through the guidance and advice of your coach.',
  },

  {
    url: '/coaches/femininity',
    imgSrc: FeminityImg,
    title: 'Femininity',
    description: `Find the right path and balance in your life as a woman and 
    learn how to better navigate difficult situations and relationships.`,
  },
  {
    url: '/coaches/finance',
    imgSrc: FinanceImg,
    title: 'Finance',
    description: 'Learn how to make better financial decisions and deal with the emotions and beliefs you have around money.',
  },
  {
    url: '/coaches/relationship',
    imgSrc: RelationshipImg,
    title: 'Relationship',
    description: 'Move forward with your life by understanding the practical steps you can take to improve your relationships.',
  },
]

export default list
