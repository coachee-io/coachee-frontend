export interface ICoachingCategory {
  id: string,
  name: string
}

export const coachingCategories: ICoachingCategory[] = [
  {
    id: 'life', name: 'Life coaching',
  },
  {
    id: 'health', name: 'Health coaching',
  },
  {
    id: 'relationship', name: 'Relationship coaching',
  },
  {
    id: 'femininity', name: 'Femininity coaching',
  },
  {
    id: 'finance', name: 'Financial coaching',
  },
  {
    id: 'nutrition', name: 'Nutrition coaching',
  },
]


export const termsAndConditions: any = [
  {
    id: 'true',
    label: 'I accept.',
    value: 'true',
  },
  {
    id: 'false',
    label: 'I do not accept.',
    value: 'false',
  },
]
