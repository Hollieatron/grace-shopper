const productsData = [
  {
    name: 'Chivas Regal - 12 Year Old',
    price: 95.31,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    imageUrl: 'http://dummyimage.com/148x200.jpg/5fa2dd/ffffff'
  },
  {
    name: 'Creme De Menthe Green',
    price: 44.62,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    imageUrl: 'http://dummyimage.com/197x230.bmp/5fa2dd/ffffff'
  },
  {
    name: 'Oil - Grapeseed Oil',
    price: 19.76,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    imageUrl: 'http://dummyimage.com/137x217.bmp/5fa2dd/ffffff'
  },
  {
    name: 'Soup - Campbells Mac N Cheese',
    price: 90.59,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    imageUrl: 'http://dummyimage.com/139x129.jpg/dddddd/000000'
  },
  {
    name: 'Oil - Shortening,liqud, Fry',
    price: 45.87,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    imageUrl: 'http://dummyimage.com/150x204.jpg/dddddd/000000'
  },
  {
    name: 'Wine - Trimbach Pinot Blanc',
    price: 47.33,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    imageUrl: 'http://dummyimage.com/120x126.bmp/5fa2dd/ffffff'
  },
  {
    name: 'Island Oasis - Peach Daiquiri',
    price: 72.26,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    imageUrl: 'http://dummyimage.com/102x153.bmp/cc0000/ffffff'
  },
  {
    name: 'Veal - Striploin',
    price: 12.94,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    imageUrl: 'http://dummyimage.com/183x200.bmp/5fa2dd/ffffff'
  },
  {
    name: 'Soup - Campbells',
    price: 24.76,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    imageUrl: 'http://dummyimage.com/136x229.png/5fa2dd/ffffff'
  },
  {
    name: 'Cookies - Englishbay Oatmeal',
    price: 55.91,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    imageUrl: 'http://dummyimage.com/221x224.jpg/ff4444/ffffff'
  }
]

const usersData = [
  {
    firstName: 'Emlynn',
    lastName: 'Vasse',
    username: 'evasse0',
    email: 'evasse0@census.gov',
    password: 'Zf46ezjg',
    salt: 'rmOWQHvY',
    googleId: 'S0Z1G5Oap8y'
  },
  {
    firstName: 'Caro',
    lastName: 'Parsonage',
    username: 'cparsonage1',
    email: 'cparsonage1@ca.gov',
    password: 'QqYuXwR',
    salt: 'RClJvr0A7o',
    googleId: 'hkNFtN2Id'
  }
]

const reviewsData = [
  {
    title:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    rating: 3.8,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
  },
  {
    title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    rating: 4.3,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'
  },
  {
    title:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    rating: 3.5,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
  }
]

const sellerData = [{name: 'Dazzlesphere'}, {name: 'Leenti'}, {name: 'Ainyx'}]

const companyData = [
  {name: 'Buzzbean'},
  {name: 'Plambee'},
  {name: 'Twitterwire'}
]

const catagoriesData = [
  {name: 'Lion, mountain'},
  {name: 'Ground legaan'},
  {name: 'Dassie'}
]

module.exports = {
  productsData,
  usersData,
  reviewsData,
  sellerData,
  companyData,
  catagoriesData
}
