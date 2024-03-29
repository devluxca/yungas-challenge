export interface IPeopleEntity {
  'gender':string
  'name': {
    'title':string
    'first':string
    'last':string
  },
  'location':{
    'region'?: string
    'street':string
    'city':string
    'state':string
    'postcode':number
    'coordinates': {
      'latitude':string
      'longitude':string
    },
    'timezone': {
      'offset':string
      'description':string
    }
  },
  'email': string
  'dob': {
    'date': string
    'age': number
  }
  'registered': {
    'date': string
    'age': number
  }
  'phone': string
  'cell': string
  'picture':{
    'large':string
    'medium':string
    'thumbnail':string
  },
  'nationality'?: string
}
