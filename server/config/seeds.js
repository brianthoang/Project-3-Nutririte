const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Veggies' },
    { name: 'Mediterranean' },
    { name: 'Mexican' },
    { name: 'Asian' },
    { name: 'Italian' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Guiso De Flor De Calabaza (Squash Blossom Saute)',
      description:
        '1 tbsp. canola oil, ¼ small yellow onion, minced, 1 clove garlic, minced, ½ red jalapeño, stemmed, seeded, minced, 2 calabazitas (Mexican squash), summer squash, or zucchini, halved, seeded, thinly sliced crosswise, 1 ripe tomato, cored, minced, 2 tbsp. minced fresh epazote, 20 squash blossoms, stemmed (both the epazote and blossoms are available from Melissas.com), Kosher salt and freshly ground black pepper, to taste',
      image: 'squash-blossom.jpg',
      category: categories[0]._id,
      price: 1.00,
      quantity: 1000
    },
    {
      name: 'Spicy Black Bean Tacos',
      description:
        '2 teaspoons cumin seeds, 1 teaspoon coriander seeds, 3 tablespoons avocado oil or vegetable oil, 1 medium Vidalia onion – peeled and cut in 1/4” dices (2 1/4 cups), 3 jalapeños – seeded and cut in 1/8” dices (1 cup), 2 teaspoons chili powder, 2 garlic cloves – skinned and finely chopped, 4 cups cooked black beans, 1 1/2 cups reserved cooking liquid from the beans, 1 teaspoon sea salt, 8 corn tortillas, 8 oz (227gr) queso blanco or feta, 1/4 medium cabbage – cut crosswise in 1/8” slices, 1 jar roasted tomato salsa or salsa of your choice, 1 medium ripe avocado – halved, pit removed, peeled and cut in 1/4” slices, cilantro sprigs',
      image: 'spicy-black-bean-taco.jpg',
      category: categories[0]._id,
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Mediterranean Chicken Lettuce Wrap Tacos',
      category: categories[1]._id,
      description:
        '12 ounces boneless skinless chicken breasts, cut into 4-inch-long, 1-inch-thick strips, 2 teaspoons Mediterranean Spice, 1/4 cup Balsamic Vinaigrette, 4 romaine lettuce leaves, shredded, 1 tablespoon thinly sliced red onion, 1/4 cup Red-Wine Vinaigrette, 1/4 cup Tzatziki, 12 butter lettuce leaves, 4 Roma tomatoes, chopped, 1 1/2 ounces crumbled feta cheese, 12 kalamata olives, pitted and chopped, 1 teaspoon chopped parsley, 1/2 teaspoon dried basil, 1/2 teaspoon dried oregano',
      image: 'med-chicken-lettuce-wrap.jpg',
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Italian Meatball Soap',
      category: categories[4]._id,
      description:
        '3/4 lb Ground Beef, 1/2 cup Freshly Grated Parmesan Cheese, 3 tbsp Fresh Parsley, Minced, 1 whole Egg, 2 cloves Garlic, 1/2 tsp Salt, 1/2 tsp Black Pepper, 1/4 tsp Ground Oregano, 2 tsp Lemon Juice, 3 tbsp Olive Oil, 7 cups Low Sodium Beef Stock, 2 cups Water, 2 tbsp Tomato Paste, 3/4 cup Onion, Chopped, 3/4 cup Carrots, Chopped, 3/4 cup Celery Chopped, 1 cup Russet Potato, Chopped (do Not Peel), 1/2 lb Cabbage Chopped, Grated Parmesan Cheese To Serve, 4 tbsp Fresh Parsley, Minced, 2 whole Bay Leaves, 1 tsp Peppercorns',
      image: 'Italian-meatball-soup.jpg',
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Green Salad with Avocado',
      category: categories[0]._id,
      description:
        '1 tbsp lemon juice, pinch of salt, 4 tbsp olive oil, small bunch finely chopped chives, 200g bag mixed salad leaves, 2 sliced, ripe avocados',
      image: 'green-salad-avo.jpg',
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Chipotle Steak Salad',
      category: categories[2]._id,
      description:
        '30 ounces, weight Mayonnaise, 11 ounces, weight Chipotle Peppers In Adobo Sauce, Reserve 2 Tablespoons Adobo, 1 whole Flank Steak, 3 Tablespoons Olive Oil, 1 Tablespoon Worcestershire Sauce, 1/2 teaspoon Ground Cumin, 1 teaspoon Oregano, 1 Tablespoon Honey, 24 ounces, weight Salad Greens (spring Mix), 4 whole Roma Tomatoes Sliced, 1 whole Cucumber Sliced, 1 whole Red Onion, Halved And Sliced',
      image: 'chipotle-steak.jpg',
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Spinach Salad with Blood Oranges and Pistachios',
      category: categories[0]._id,
      description:
        '2 1/2 tablespoons fresh blood orange juice from 1 blood orange, 1 tablespoon sherry vinegar, 2 tablespoons minced shallot, 1/2 teaspoon honey, 3 tablspoons olive oil, Kosher salt, Freshly ground black pepper. For Salad: 3 blood oranges, segmented, 5 ounces baby spinach, 1/4 cup shelled pistachios',
      image: 'spinach-salad-oranges.jpg',
      price: 1.00,
      quantity: 500
    },
    {
      name: 'Shrimp Tacos with Pineapples',
      category: categories[2]._id,
      description:
        '1/2 small red onion, thinly sliced, 2 tablespoons fresh lime juice, Pinch of sugar, Kosher salt, 1/4 medium pineapple, peeled, cored, cut lengthwise into spears, then crosswise 1/2" thick (about 2 cups), 2 tablespoons extra-virgin olive oil, divided, 1 1/4 pounds shrimp, peeled, deveined, 1 tablespoon Sriracha, Freshly ground black pepper, 8 corn tortillas, warmed, 1 avocado, sliced, 1 jalapeño, very thinly sliced, seeds removed if desired, 1/2 cup cilantro leaves with tender stems, Lime wedges (for serving)',
      image: 'shrimp-tacos.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Italian Beef and Polenta',
      category: categories[4]._id,
      description:
        '1 pound boneless beef tri-tip steak, 1- to 1½-inches thick, ¼ teaspoon salt, ¼ teaspoon ground black pepper, 1 tablespoon olive oil, 2 cups red sweet pepper strips, 2 cups trimmed fresh green beans, ¾ cup instant polenta, 2 tablespoons finely shredded Parmesan cheese, 2 teaspoons snipped fresh oregano',
      image: 'Italian-beef-polenta.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Tomato and Black Olive Orzo Salad',
      category: categories[4]._id,
      description:
        '2 cups grape tomatoes, 3 tablespoons extra-virgin olive oil, plus more for drizzling, Kosher salt and freshly ground black pepper,Kosher salt and freshly ground black pepper, 1/2 pound large orzo pasta ,1/4 cup crumbled feta , 1 1/2 tablespoons red wine vinegar, 1/2 teaspoon Dijon mustard, 1 clove garlic, smashed, 1 tablespoon finely sliced fresh basil, 2 teaspoons fresh oregano torn, 1 teaspoon sugar, 1 cup pitted kalamata olives, roughly chopped, 1 1/2 cups canned chickpeas, rinsed, 1 roasted red pepper, finely sliced, 1/2 cup sliced pepperoncini peppers, stems removed, 1/4 red onion, thinly sliced, 2 tablespoons chopped fresh basil --- Serving suggestion: Mediterranean Sardines with Lemon and Garlic, recipe follows: 1 1/2 cups mayonnaise, 1/2 cup fat-free Greek yogurt, 2 tablespoons finely diced pickles, 2 tablespoons finely diced pickled sweet red pepper, 1 tablespoon minced red onion, 1 tablespoon minced brined capers, 1/2 lemon, juiced, 1 tablespoon chopped fresh tarragon, 1 tablespoon chopped fresh chives, 3 dashes hot sauce , Pinch cayenne , Kosher salt and freshly ground black pepper, 8 whole large, fresh sardines, cleaned but with head and tail intact, Flaky sea salt, Freshly ground black pepper, 8 sprigs fresh thyme, 8 sprigs fresh oregano, 1 lemon, cut into thin wheels, 2 cloves garlic, thinly sliced, Extra-virgin olive oil',
      image: 'tomato-olive-orzo-salad.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Mediterranean Ratatouille',
      category: categories[1]._id,
      description:
        '',
      image: 'mediterranean-ratatouille.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Chopped Mediterranean Salad',
      category: categories[1]._id,
      description:
        '1 whole-wheat pita (6-inch), cut into small squares, 1 romaine heart, sliced 1/2 inch crosswise, 1 can (15 ounces) chickpeas, drained and rinsed, 1/2 English cucumber, unpeeled and cut into 1/2-inch dice, 1 scallion, thinly sliced, 1 cup cherry tomatoes, quartered, 1/4 cup crumbled feta cheese, 3 tablespoons fresh lemon juice (from 1 lemon), 2 tablespoons olive oil, Coarse salt and ground pepper',
      image: 'chopped-med-salad.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Fennel and Orange Salad',
      category: categories[1]._id,
      description:
        '2 tbsp. extra-virgin olive oil, 2 tbsp. orange juice, 2 tbsp. sherry vinegar, ¾ tsp. salt, ¼ tsp. Black pepper, 1 bag mixed salad greens, 3 small oranges, 2 medium fennel bulbs, ¾ c. pitted green olives, ½ c. fresh basil leaves',
      image: 'fennel-orange-salad.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Salad Aveyronnaise',
      category: categories[1]._id,
      description:
        '',
      image: 'salad-aveyronnaise.jpg',
      price: 1.00,
      quantity: 50
    },
    {
      name: 'Asian Pear Slaw',
      category: categories[4]._id,
      description:
        '1/3 cup red onion, finely sliced, Pinch of coarse salt, such as pink himalayan, 1 asian pear, peeled and cut into small matchstics, 1 firm mango, cut into small matchsticks, Juice of 1 lime, 2 tablespoons rice vinegar, 1/3 cup bruised and chopped fresh mint and cilantro (equal portions), 1/2 teaspoon or more of aleppo pepper',
      image: 'asian-pear-slaw.jpg',
      price: 1.00,
      quantity: 50
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
