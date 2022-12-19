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
        'Ingredients: 1 tbsp. canola oil, ¼ small yellow onion, minced, 1 clove garlic, minced, ½ red jalapeño, stemmed, seeded, minced, 2 calabazitas (Mexican squash), summer squash, or zucchini, halved, seeded, thinly sliced crosswise, 1 ripe tomato, cored, minced, 2 tbsp. minced fresh epazote, 20 squash blossoms, stemmed (both the epazote and blossoms are available from Melissas.com), Kosher salt and freshly ground black pepper, to taste.  ----  Nutrional Value: Fat: 4g, Carbs: 6g, Calories: 59, Serving Size: 4',
      image: 'squash-blossom.jpg',
      category: categories[0]._id,
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Spicy Black Bean Tacos',
      description:
        'Ingredients: 2 teaspoons cumin seeds, 1 teaspoon coriander seeds, 3 tablespoons avocado oil or vegetable oil, 1 medium Vidalia onion – peeled and cut in 1/4” dices (2 1/4 cups), 3 jalapeños – seeded and cut in 1/8” dices (1 cup), 2 teaspoons chili powder, 2 garlic cloves – skinned and finely chopped, 4 cups cooked black beans, 1 1/2 cups reserved cooking liquid from the beans, 1 teaspoon sea salt, 8 corn tortillas, 8 oz (227gr) queso blanco or feta, 1/4 medium cabbage – cut crosswise in 1/8” slices, 1 jar roasted tomato salsa or salsa of your choice, 1 medium ripe avocado – halved, pit removed, peeled and cut in 1/4” slices, cilantro sprigs.  ----  Nutrional Value: Fat: 17g, Carbs: 42g, Calories: 381, Serving Size: 8',
      image: 'spicy-black-bean-taco.jpg',
      category: categories[0]._id,
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Mediterranean Chicken Lettuce Wrap Tacos',
      category: categories[1]._id,
      description:
        'Ingredients: 12 ounces boneless skinless chicken breasts, cut into 4-inch-long, 1-inch-thick strips, 2 teaspoons Mediterranean Spice, 1/4 cup Balsamic Vinaigrette, 4 romaine lettuce leaves, shredded, 1 tablespoon thinly sliced red onion, 1/4 cup Red-Wine Vinaigrette, 1/4 cup Tzatziki, 12 butter lettuce leaves, 4 Roma tomatoes, chopped, 1 1/2 ounces crumbled feta cheese, 12 kalamata olives, pitted and chopped, 1 teaspoon chopped parsley, 1/2 teaspoon dried basil, 1/2 teaspoon dried oregano.  ----  Nutrional Value: Fat: 31g, Carbs: 12g, Calories: 626, Serving Size: 4',
      image: 'med-chicken-lettuce-wrap.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Italian Meatball Soap',
      category: categories[4]._id,
      description:
        'Ingredients: 3/4 lb Ground Beef, 1/2 cup Freshly Grated Parmesan Cheese, 3 tbsp Fresh Parsley, Minced, 1 whole Egg, 2 cloves Garlic, 1/2 tsp Salt, 1/2 tsp Black Pepper, 1/4 tsp Ground Oregano, 2 tsp Lemon Juice, 3 tbsp Olive Oil, 7 cups Low Sodium Beef Stock, 2 cups Water, 2 tbsp Tomato Paste, 3/4 cup Onion, Chopped, 3/4 cup Carrots, Chopped, 3/4 cup Celery Chopped, 1 cup Russet Potato, Chopped (do Not Peel), 1/2 lb Cabbage Chopped, Grated Parmesan Cheese To Serve, 4 tbsp Fresh Parsley, Minced, 2 whole Bay Leaves, 1 tsp Peppercorns.  ----  Nutrional Value: Fat: 17g, Carbs: 13g, Calories: 296, Serving Size: 8',
      image: 'Italian-meatball-soup.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Green Salad with Avocado',
      category: categories[0]._id,
      description:
        'Ingredients: 1 tbsp lemon juice, pinch of salt, 4 tbsp olive oil, small bunch finely chopped chives, 200g bag mixed salad leaves, 2 sliced, ripe avocados.  ----  Nutrional Value: Fat: 15g, Carbs: 5g, Calories: 116, Serving Size: 4',
      image: 'green-salad-avo.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Chipotle Steak Salad',
      category: categories[2]._id,
      description:
        'Ingredients: 30 ounces, weight Mayonnaise, 11 ounces, weight Chipotle Peppers In Adobo Sauce, Reserve 2 Tablespoons Adobo, 1 whole Flank Steak, 3 Tablespoons Olive Oil, 1 Tablespoon Worcestershire Sauce, 1/2 teaspoon Ground Cumin, 1 teaspoon Oregano, 1 Tablespoon Honey, 24 ounces, weight Salad Greens (spring Mix), 4 whole Roma Tomatoes Sliced, 1 whole Cucumber Sliced, 1 whole Red Onion, Halved And Sliced.  ----  Nutrional Value: Fat:38g, Carbs: 14g, Calories: 398, Serving Size: 8',
      image: 'chipotle-steak.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Spinach Salad with Blood Oranges and Pistachios',
      category: categories[0]._id,
      description:
        'Ingredients: 2 1/2 tablespoons fresh blood orange juice from 1 blood orange, 1 tablespoon sherry vinegar, 2 tablespoons minced shallot, 1/2 teaspoon honey, 3 tablspoons olive oil, Kosher salt, Freshly ground black pepper. For Salad: 3 blood oranges, segmented, 5 ounces baby spinach, 1/4 cup shelled pistachios.  ----  Nutrional Value: Fat: 41g, Carbs: 11g, Calories: 341, Serving Size: 8',
      image: 'spinach-salad-oranges.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Shrimp Tacos with Pineapples',
      category: categories[2]._id,
      description:
        'Ingredients: 1/2 small red onion, thinly sliced, 2 tablespoons fresh lime juice, Pinch of sugar, Kosher salt, 1/4 medium pineapple, peeled, cored, cut lengthwise into spears, then crosswise 1/2" thick (about 2 cups), 2 tablespoons extra-virgin olive oil, divided, 1 1/4 pounds shrimp, peeled, deveined, 1 tablespoon Sriracha, Freshly ground black pepper, 8 corn tortillas, warmed, 1 avocado, sliced, 1 jalapeño, very thinly sliced, seeds removed if desired, 1/2 cup cilantro leaves with tender stems, Lime wedges (for serving).  ----  Nutrional Value: Fat: 34g, Carbs: 15g, Calories: 202, Serving Size: 2',
      image: 'shrimp-tacos.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Italian Beef and Polenta',
      category: categories[4]._id,
      description:
        'Ingredients: 1 pound boneless beef tri-tip steak, 1- to 1½-inches thick, ¼ teaspoon salt, ¼ teaspoon ground black pepper, 1 tablespoon olive oil, 2 cups red sweet pepper strips, 2 cups trimmed fresh green beans, ¾ cup instant polenta, 2 tablespoons finely shredded Parmesan cheese, 2 teaspoons snipped fresh oregano.  ----  Nutrional Value: Fat: 41g, Carbs: 11g, Calories: 566, Serving Size: 4',
      image: 'Italian-beef-polenta.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Tomato and Black Olive Orzo Salad',
      category: categories[4]._id,
      description:
        'Ingredients: 2 cups grape tomatoes, 3 tablespoons extra-virgin olive oil, plus more for drizzling, Kosher salt and freshly ground black pepper,Kosher salt and freshly ground black pepper, 1/2 pound large orzo pasta ,1/4 cup crumbled feta , 1 1/2 tablespoons red wine vinegar, 1/2 teaspoon Dijon mustard, 1 clove garlic, smashed, 1 tablespoon finely sliced fresh basil, 2 teaspoons fresh oregano torn, 1 teaspoon sugar, 1 cup pitted kalamata olives, roughly chopped, 1 1/2 cups canned chickpeas, rinsed, 1 roasted red pepper, finely sliced, 1/2 cup sliced pepperoncini peppers, stems removed, 1/4 red onion, thinly sliced, 2 tablespoons chopped fresh basil --- Serving suggestion: Mediterranean Sardines with Lemon and Garlic, recipe follows: 1 1/2 cups mayonnaise, 1/2 cup fat-free Greek yogurt, 2 tablespoons finely diced pickles, 2 tablespoons finely diced pickled sweet red pepper, 1 tablespoon minced red onion, 1 tablespoon minced brined capers, 1/2 lemon, juiced, 1 tablespoon chopped fresh tarragon, 1 tablespoon chopped fresh chives, 3 dashes hot sauce , Pinch cayenne , Kosher salt and freshly ground black pepper, 8 whole large, fresh sardines, cleaned but with head and tail intact, Flaky sea salt, Freshly ground black pepper, 8 sprigs fresh thyme, 8 sprigs fresh oregano, 1 lemon, cut into thin wheels, 2 cloves garlic, thinly sliced, Extra-virgin olive oil.  ----  Nutrional Value: Fat: 31g, Carbs: 13g, Calories: 253, Serving Size: 4',
      image: 'tomato-olive-orzo-salad.jpg',
      price: 15.0,
      quantity: 1000  
    },
    {
      name: 'Mediterranean Ratatouille',
      category: categories[1]._id,
      description:
        'Ingredients: 1/4 cup olive oil, 2 large onions, finely chopped, 4 cloves garlic, 1 large eggplant, cut into 1" cubes, 4 medium green bell peppers, cut into 1" chunks, 4 small zucchini, cut into 1/4" slices, 6 large ripe tomatoes, finely chopped or 1 can (28 ounces) diced tomatores, 1 teaspoon salt, 1 teaspoons sugar, 2 teaspoons dried oregano.  ----  Nutrional Value: Fat: 35g, Carbs: 16g, Calories: 551, Serving Size: 8',
      image: 'mediterranean-ratatouille.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Chopped Mediterranean Salad',
      category: categories[1]._id,
      description:
        'Ingredients: 1 whole-wheat pita (6-inch), cut into small squares, 1 romaine heart, sliced 1/2 inch crosswise, 1 can (15 ounces) chickpeas, drained and rinsed, 1/2 English cucumber, unpeeled and cut into 1/2-inch dice, 1 scallion, thinly sliced, 1 cup cherry tomatoes, quartered, 1/4 cup crumbled feta cheese, 3 tablespoons fresh lemon juice (from 1 lemon), 2 tablespoons olive oil, Coarse salt and ground pepper.  ----  Nutrional Value: Fat: 37g, Carbs: 14g, Calories: 411, Serving Size: 8',
      image: 'chopped-med-salad.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Fennel and Orange Salad',
      category: categories[1]._id,
      description:
        'Ingredients: 2 tbsp. extra-virgin olive oil, 2 tbsp. orange juice, 2 tbsp. sherry vinegar, ¾ tsp. salt, ¼ tsp. Black pepper, 1 bag mixed salad greens, 3 small oranges, 2 medium fennel bulbs, ¾ c. pitted green olives, ½ c. fresh basil leaves.  ----  Nutrional Value: Fat: 24g, Carbs: 9g, Calories: 452, Serving Size: 8',
      image: 'fennel-orange-salad.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Salad Aveyronnaise',
      category: categories[1]._id,
      description:
        'Ingredients: 4.0 tbsp mild-tasting olive oil , such as Filippo Berio, 100.0g Roquefort , cut into chunks with a small, sharp knife, 500.0g punnet cherry tomatoes , halved, 1 garlic clove, drizzle extra-virgin olive oil, 3 large handfuls baby spinach or other salad leaves, For the vinaigrette, 5.0 tbsp walnuts, large handful basil leaves, 2.0 tbsp sherry vinegar, 200.0g pack bacon lardons.  ----  Nutrional Value: Fat: 3g, Carbs: 14g, Calories: 421, Serving Size: 4',
      image: 'salad-aveyronnaise.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Asian Pear Slaw',
      category: categories[3]._id,
      description:
        'Ingredients: 1/3 cup red onion, finely sliced, Pinch of coarse salt, such as pink himalayan, 1 asian pear, peeled and cut into small matchstics, 1 firm mango, cut into small matchsticks, Juice of 1 lime, 2 tablespoons rice vinegar, 1/3 cup bruised and chopped fresh mint and cilantro (equal portions), 1/2 teaspoon or more of aleppo pepper.  ----  Nutrional Value: Fat: 41g, Carbs: 11g, Calories: 566, Serving Size: 4',
      image: 'asian-pear-slaw.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Wasabi Salmon With Bok Choy, Green Cabbage and Shittakes',
      category: categories[3]._id,
      description:
      'Ingredients: 1/4 cup mayonnaise, 1 teaspoon wasabi paste (Japanese horseradish paste), 1 1" piece ginger, peeled, finely grated, 2 large garlic cloves, finely grated, 4 6-ounce skinless salmon fillets (preferably wild), Kosher salt, freshly ground pepper, 1 pound baby bok choy, halved, 2 cups (packed) finely shredded green cabbage (about 5 ounces), 4 ounces shiitake mushrooms, stemmed, sliced if large, 2 tablespoons olive oil, Ingredient info: Wasabi paste is available in the Asian foods section of some supermarkets and at Japanese markets.  ----  Nutrional Value: Fat: 41g, Carbs: 11g, Calories: 566, Serving Size: 4',
      image: 'wasabi-salmon-bokchoy-green-cabbage-shiitakes.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Vegetable Sushi with Asian Dipping Sauce',
      category: categories[3]._id,
      description:
      'Ingredients: 1 large parsnip, peeled and chopped, 1/2 Teaspoon sea salt, 1/4 Cup raw pine nuts. Nori sheets: 1 carrot, cut into thin matchsticks, 1 zucchini, cut into thin matchsticks, 1 scallion, cut into thin matchsticks, 1 red bell pepper, cut into thin matchsticks, 1 avocado, small diced sprouts, 1/4 Cup wheat-free tamari, 2 Tablespoons seasoned rice vinegar, 1/8 Cup sesame oil, 2 Tablespoons agave nectar, Dash of cayenne, 1 Teaspoon wasabi powder.  ----  Nutrional Value: Fat: 74g, Carbs: 102g, Calories: 1,097, Serving Size: 1',
      image: 'vegi-sushi.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Mache with Asian Pears, Hazelnuts & Truffle Vinaigrette',
      category: categories[3]._id,
      description:
      'Ingredients: 1 tablespoon minced shallots, 1 tablespoon white balsamic vinegar, 3 tablespoons white truffle oil, 1/8 teaspoon sea salt, Freshly ground black pepper to taste, 1 1/2 asian pears, 5 oz (142gr) baby mâche – rinsed and spun dry, 1/4 cup roasted hazelnuts – coarsely crushed (use mortar and pestle)  ----  Nutrional Value: Fat: 20g, Carbs: 15g, Calories: 235, Serving Size: 4',
      image: 'mache.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Grilled Mexican Corn',
      category: categories[2]._id,
      description:
      'Ingredients: 6 fresh corn cobs with husk in tact, 1 lime, 1/3 cup Kewpie Japanese mayonnaise, 1 teaspoon Spanish smoked paprika, 1 teaspoon chili powder, 4 ounces grated Cotija cheese, 1/3 cup chopped cilantro  ----  Nutrional Value: Fat: 17g, Carbs: 21g, Calories: 252, Serving Size: 6',
      image: 'grilled-corn.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Elvias Mexican Pickled Vegetables',
      category: categories[2]._id,
      description:
      'Ingredients: 1 tablespoon black peppercorns, 2 teaspoons allspice berries, 2 teaspoons coriander seeds, 1 teaspoon whole cloves, 1 cup extra-virgin olive oil, 1 medium onion, thinly sliced, 10 cloves garlic, peeled, 1 large head cauliflower, broken into small florets, 1 pound pearl onions, fresh (peeled; see Tip) or frozen (thawed),  3 medium carrots, cut into ¼-inch rounds, 1 large red, yellow or orange bell pepper, cut lengthwise into ¼-inch slices, 1 small habanero or 2 small jalapeño peppers, stemmed and thinly sliced, 2½ cups distilled white vinegar, 6 bay leaves, 2 tablespoons dried oregano, 1 tablespoon salt, 1 teaspoon cumin seeds  ----  Nutrional Value: Fat: 41g, Carbs: 11g, Calories: 566, Serving Size: 4',
      image: 'pickled-veggies.jpg',
      price: 15.0,
      quantity: 1000
    },
    {
      name: 'Chilled Eggplant Soup',
      category: categories[0]._id,
      description:
      'Ingredients: 4 long Asian eggplant (or substitute 2 medium-sized traditional-shaped eggplant), sliced lengthwise, 1 small red onion (or 2-3 medium shallots), thinly sliced, juice of half a lemon, 1 small garlic clove, grated, 1 large overripe tomato (so that it’s easier to peel), 3 tablespoons plain yogurt, 3-4 tablespoons extra-virgin olive oil, salt and pepper, julienned cucumbers, quartered cherry tomatoes, chopped parsley, a drizzle of extra olive oil for garnish (optional)  ----  Nutrional Value: Fat: 11g, Carbs: 30g, Calories: 215, Serving Size: 5',
      image: 'chilled-eggplant.jpg',
      price: 15.0,
      quantity: 1000
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Sal',
    lastName: 'Funnyton',
    email: 'sfunnyton@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Bobby',
    lastName: 'Donny',
    email: 'bdonny@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
