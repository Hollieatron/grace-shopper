const productData = [
  {
    name: 'Smart Sense Acid Reducer',
    price: 73.86,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Divalproex Sodium',
    price: 32.24,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Digoxin',
    price: 79.89,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'napoleon PERDIS FOUNDATION STICK BROAD SPECTRUM SPF 15 Look 3',
    price: 83.3,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'pain relief',
    price: 53.67,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'By Pharmicell Lab Luxury Cell Performance',
    price: 73.85,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Clearasil',
    price: 60.71,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'Vancomycin Hydrochloride',
    price: 92.81,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'VANIQA',
    price: 39.87,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Complete Allery and Sinus Multi-Symptom',
    price: 53.61,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'NRV-Systemic',
    price: 24.32,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'CANDIDA ALBICANS',
    price: 30.45,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'Naproxen',
    price: 45.91,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'RUNNY NOSE COUGH',
    price: 57.78,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'Zaleplon',
    price: 35.22,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Se-Natal 19 Chewable',
    price: 23.17,
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Sodium Phosphates',
    price: 75.78,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Felodipine',
    price: 90.7,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'MRCL',
    price: 86.77,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Guinea Pig Epithelium',
    price: 45.42,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'Glumetza',
    price: 22.02,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'preferred plus cough dm',
    price: 50.46,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'TOPIRAMATE',
    price: 24.13,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Diltiazem Hydrochloride',
    price: 21.66,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  },
  {
    name: 'Deb Med InstantFOAM Hand Sanitizer',
    price: 37.48,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Aprodine',
    price: 29.07,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'
  },
  {
    name: 'Eye Drops AC',
    price: 50.82,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Castor Oil',
    price: 2.98,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {
    name: 'Amoxicillin',
    price: 88.73,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'soCALM Pain Relieving',
    price: 75.36,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {
    name: 'Ropinirole Hydrochloride',
    price: 46.82,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    imageUrl: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff'
  }
]

const userData = [
  {
    firstName: 'Kenny',
    lastName: 'Farrent',
    email: 'kfarrent0@intel.com',
    username: 'kfarrent0',
    password: 'DXlKv9',
    isAdmin: true,
    salt: 'v8iC2zJxrGm'
  },
  {
    firstName: 'Nonie',
    lastName: 'Tyrrell',
    email: 'ntyrrell1@surveymonkey.com',
    username: 'ntyrrell1',
    password: '78QuVIPAnZqM',
    isAdmin: false,
    salt: 'YRVNg7'
  },
  {
    firstName: 'Dominga',
    lastName: 'Luttger',
    email: 'dluttger2@fastcompany.com',
    username: 'dluttger2',
    password: 'Kz8B351',
    isAdmin: false,
    salt: 'wdfoGxi7'
  },
  {
    firstName: 'Kendall',
    lastName: 'Attridge',
    email: 'kattridge3@surveymonkey.com',
    username: 'kattridge3',
    password: 'c8cJpc',
    isAdmin: false,
    salt: '5w4qhNu'
  },
  {
    firstName: 'Nellie',
    lastName: 'Culwen',
    email: 'nculwen4@infoseek.co.jp',
    username: 'nculwen4',
    password: 'DKJUii',
    isAdmin: false,
    salt: '4iZBiEkdqju'
  }
]

const reviewData = [
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

const manufacturerData = [
  {name: 'Buzzbean'},
  {name: 'Plambee'},
  {name: 'Twitterwire'}
]

const categoryData = [
  {
    name: 'Electronics',
    imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'
  },
  {
    name: 'Computers',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {name: 'Movies', imageUrl: 'http://dummyimage.com/250x250.png/cc0000/ffffff'},
  {
    name: 'Grocery',
    imageUrl: 'http://dummyimage.com/250x250.png/ff4444/ffffff'
  },
  {name: 'Tools', imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'},
  {name: 'Home', imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'},
  {name: 'Beauty', imageUrl: 'http://dummyimage.com/250x250.bmp/ff4444/ffffff'},
  {
    name: 'Outdoors',
    imageUrl: 'http://dummyimage.com/250x250.bmp/cc0000/ffffff'
  },
  {
    name: 'Clothing',
    imageUrl: 'http://dummyimage.com/250x250.png/dddddd/000000'
  },
  {name: 'Beauty', imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff'},
  {name: 'Toys', imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'}
]

module.exports = {
  productData,
  userData,
  reviewData,
  sellerData,
  manufacturerData,
  categoryData
}
