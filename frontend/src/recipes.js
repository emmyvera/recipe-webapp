const recipes = [
  {
    _id: '1',
    name: 'Jollof Rice',
    image: '/images/jollof_rice.jpg',
    category: 'Starchy food',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/jollof_rice.jpg',
    author_id: 1,
    rating: 4.5,
    views: 1024,
  },
  {
    _id: '2',
    name: 'Beans Cake',
    image: '/images/beans_cake.jpg',
    category: 'Protein',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/beans_cake.jpg',
    author_id: 1,
    rating: 4.8,
    views: 2048,
  },
  {
    _id: '3',
    name: 'Meat Pie',
    image: '/images/meat_pie.jpg',
    category: 'Snack food',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/meat_pie.jpg',
    author_id: 1,
    rating: 4.4,
    views: 512,
  },
  {
    _id: '4',
    name: 'Vegetable Salad',
    image: '/images/vege_salad.jpg',
    category: 'Vegetables',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/vege_salad.jpg',
    author_id: 1,
    rating: 4.6,
    views: 128,
  },
  {
    _id: '5',
    name: 'Pepper Soup',
    image: '/images/pepper_soup.jpg',
    category: 'Spicy Food',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: 'No Video',
    author_id: 1,
    rating: 4.5,
    views: 3024,
  },
  {
    _id: '6',
    name: 'Moin Moin',
    image: '/images/moin_moin.jpg',
    category: 'Protein',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: 'No Video',
    author_id: 1,
    rating: 4.3,
    views: 1024,
  },
  {
    _id: '7',
    name: 'Beans & Rice',
    image: '/images/beans_rice.jpg',
    category: 'Starchy food',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: 'No Video',
    author_id: 1,
    rating: 4.8,
    views: 1524,
  },
  {
    _id: '8',
    name: 'Ewa goin (Beans)',
    image: '/images/ewa_goin.jpg',
    category: 'Protein',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/ewa_goin.jpg',
    author_id: 1,
    rating: 4.4,
    views: 1324,
  },
  {
    _id: '9',
    name: 'Cake',
    image: '/images/cake.jpg',
    category: 'Dissert',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/cake.jpg',
    author_id: 1,
    rating: 4.9,
    views: 4324,
  },
  {
    _id: '10',
    name: 'Chin Chin',
    image: '/images/chin_chin.jpg',
    category: 'Snack',
    ingredient:
      '1. Lorem ipsum dolor sit \n2. consectetuer adipiscing \n3. elit. Aenean \n4. commodo ligula \n5. eget dolor. \n6. Aenean massa.\n7. Cum sociis natoque \n8. penatibus ',
    steps:
      '1. et magnis dis parturient montes, nascetur ridiculus mus.\n\n2. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \n\n3. Nulla consequat massa quis enim.\n\n4. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\n5. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n\n6. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. \n\n7. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n\n8. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. \n\n9. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.\n\n10. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    video: '/videos/chin_chin.jpg',
    author_id: 1,
    rating: 4.9,
    views: 3024,
  },
]

export default recipes
