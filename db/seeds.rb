require 'open-uri'

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
Category.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('categories')
Product.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('products')
Review.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
Cart.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('carts')
CartProduct.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('cart_products')


# USER SEEDS
demo = User.create!(first_name: 'Demo', last_name: 'User', email: 'demo@email.com', password: 'password')
Cart.create!(user_id: demo.id)

users = [
  ["Mike", "Wazowski"],
  ["Sully", "Sullivan"],
  ["Randall", "Boggs"],
  ["Boo", "Boo"],
  ["Celia", "Mae"],
  ["Eddy", "Roz"],
  ["George", "Sanderson"],
  ["Henry", "J. Waternoose"],
  ["Daniel", "Fungus"],
  ["Fred", "Yeti"],
  ["Needleman", "Michaelson"],
  ["Smitty", "Bile"],
  ["Thaddeus", "Phlegm"],
  ["Jerry", "Slugworth"],
  ["Ricky", "Plesuski"],
]


15.times do |i|
  user = User.create!(
    first_name: users[i][0],
    last_name: users[i][1],
    email: users[i][0] + "." + users[i][1] + "@email.com",
    password: "Password1234*"
  )
  Cart.create!(user_id: user.id)
end
# END

womens = Category.create!( title: 'Women', parent_category_id:  nil )
mens = Category.create!( title: 'Men', parent_category_id:  nil )
pets = Category.create!( title: 'Pets', parent_category_id:  nil )



# PET PRODUCTS SEEDS
# Cashmere Cable Knit Dog Sweater ##
cashmereDogSweater = Product.create!(
  title: "Cashmere Cable Knit Dog Sweater",
  description: "Introduce your furry friend to the coziness of 100% cashmere with our soft cable-knit sweater. Boasting a ribbed neck and sleeves for added comfort, it’s perfect for keeping your cold weather-sensitive pup nice and warm or just simply letting your dog make their own style statement. Either way, it’s worth the tail wagging.",
  price: 55.00,
  stock: 10,
  category_id: pets.id
)
file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds3.jpeg')
file4 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds4.jpeg')
file5 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds5.jpeg')
cashmereDogSweater.photos.attach(io: file1, filename: 'pets/cds1.jpeg')
cashmereDogSweater.photos.attach(io: file2, filename: 'pets/cds2.jpeg')
cashmereDogSweater.photos.attach(io: file3, filename: 'pets/cds3.jpeg')
cashmereDogSweater.photos.attach(io: file4, filename: 'pets/cds4.jpeg')
cashmereDogSweater.photos.attach(io: file5, filename: 'pets/cds5.jpeg')

## Maxwell Pet Bed ##
maxwellPetBed = Product.create!(
  title: "Maxwell Pet Bed",
  description: "Your best friend deserves the very best. Made for style, durability, and comfort, this pet bed will be as aesthetically pleasing to you as it is plush for your furry companion.",
  price: 30.00,
  stock: 10,
  category_id: pets.id
)
file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb3.jpeg')
file4 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb4.jpeg')
file5 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb5.jpeg')
maxwellPetBed.photos.attach(io: file1, filename: 'pets/mpb1.jpeg')
maxwellPetBed.photos.attach(io: file2, filename: 'pets/mpb2.jpeg')
maxwellPetBed.photos.attach(io: file3, filename: 'pets/mpb3.jpeg')
maxwellPetBed.photos.attach(io: file4, filename: 'pets/mpb4.jpeg')
maxwellPetBed.photos.attach(io: file5, filename: 'pets/mpb5.jpeg')

# Double Pet Bowl ##
 doublePetBowl= Product.create!(
    title: "Double Pet Bowl",
    description: "Sleek and practical, this design marvel features two removable bowls with smooth, glass-like surfaces that make cleaning a snap. ",
    price: 16.00,
  stock: 10,
  category_id: pets.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb3.jpeg')
doublePetBowl.photos.attach(io: file1, filename: 'pets/gdb1.jpeg')
doublePetBowl.photos.attach(io: file2, filename: 'pets/gdb2.jpeg')
doublePetBowl.photos.attach(io: file3, filename: 'pets/gdb3.jpeg')

# Interval Long Sleeve Tee ##
 mensTop= Product.create!(
    title: "Interval Long Sleeve Tee",
    description: "This long sleeve tee is soft, stretchy, and just the right weight for all types of movement. Worn alone or as a top layer, its breathable, moisture-wicking nylon-spandex blend will keep you dry and cool.",
    price: 30.00,
  stock: 10,
  category_id: mens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_shirt_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_shirt_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_shirt_3.jpeg')
mensTop.photos.attach(io: file1, filename: 'mens_shirt_1.jpeg')
mensTop.photos.attach(io: file2, filename: 'mens_shirt_2.jpeg')
mensTop.photos.attach(io: file3, filename: 'mens_shirt_3.jpeg')

# Latitude Jogger Pant ##
 mensPant= Product.create!(
    title: "Latitude Jogger Pant",
    description: "These flattering, relaxed-fit pants were designed with a wide waistband to ensure peak comfort (whether you're at the gym or on the couch). The moisture-wicking fabric ensures they'll never see you sweat. Designed with a tapered leg, two deep front pockets, and one interior phone pocket, they’re infinitely more useful (and flattering) than your average sweats.",
    price: 32.00,
  stock: 10,
  category_id: mens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_pant_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_pant_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_pant_3.jpeg')
mensPant.photos.attach(io: file1, filename: 'mens_pant_1.jpeg')
mensPant.photos.attach(io: file2, filename: 'mens_pant_2.jpeg')
mensPant.photos.attach(io: file3, filename: 'mens_pant_3.jpeg')


# Mens Card ##
 mensCard= Product.create!(
    title: "Wool Cashmere Ribbed V-Neck Cardigan",
    description: "Crafted from a blend of cashmere and Basolan wool, this V-neck cardigan makes every piece in your closet — be it a t-shirt or a suit — look dignified. Fluffy, warm, soft, and luxurious, our wool is specially treated with DCCA to make it extra durable and shrink-resistant. The timeless, flattering cut, ribbed wool detailing, and two patch pockets make this piece a sweater you’ll wear forever.",
    price: 32.00,
  stock: 10,
  category_id: mens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/mens_3.jpeg')
mensCard.photos.attach(io: file1, filename: 'mens_1.jpeg')
mensCard.photos.attach(io: file2, filename: 'mens_2.jpeg')
mensCard.photos.attach(io: file3, filename: 'mens_3.jpeg')

# Womens top ##
 womTop= Product.create!(
    title: "Cotton Boxy Cropped Tee",
    description: "Meet the first-ever actually flattering boxy tee, made from a super soft lightweight cotton jersey. It's the wardrobe staple we can’t stop reaching for.",
    price: 15.00,
  stock: 10,
  category_id: womens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_crop_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_crop_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_crop_3.jpeg')
womTop.photos.attach(io: file1, filename: 'w_crop_1.jpeg')
womTop.photos.attach(io: file2, filename: 'w_crop_2.jpeg')
womTop.photos.attach(io: file3, filename: 'w_crop_3.jpeg')

# Womens earrings ##
 womE= Product.create!(
    title: "14k Solid Gold Faceted Huggie Earrings",
    description: "The 14k Solid Gold Faceted Huggie Earrings might seem simple upon first glance, but they’re chiseled from 14k solid gold and beveled to catch the light — casting head-turning sparkles in every direction. Made in New York City and designed for everyday wear, these earrings are that little something extra you’re looking for.",
    price: 165.00,
  stock: 10,
  category_id: womens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_e_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_e_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_e_3.jpeg')
womE.photos.attach(io: file1, filename: 'w_e_1.jpeg')
womE.photos.attach(io: file2, filename: 'w_e_2.jpeg')
womE.photos.attach(io: file3, filename: 'w_e_3.jpeg')

# Womens glasses ##
 womGlasses= Product.create!(
    title: "Wilshire Round Acetate Sunglasses",
    description: "Our Wilshire Round Acetate Sunglasses are designed to be oversized, universally flattering, and all-around impressive. Crafted from durable Italian-made Mazzucchelli acetate and outfitted with Zeiss lenses and best-in-class OBE hinges, the Wilshire reduces glare and induces compliments.",
    price: 30.00,
  stock: 10,
  category_id: womens.id
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_sg_1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_sg_2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/w_sg_3.jpeg')
womGlasses.photos.attach(io: file1, filename: 'w_sg_1.jpeg')
womGlasses.photos.attach(io: file2, filename: 'w_sg_2.jpeg')
womGlasses.photos.attach(io: file3, filename: 'w_sg_3.jpeg')

review_content = [
  ["Great Product!", "I absolutely love this product! It exceeded my expectations and has become an essential part of my daily routine.", "5"],
  ["Not so good...", "I'm not impressed with this product. It didn't deliver the promised results and I found it to be overpriced for what it offers.", "2"],
  ["Could be better", "This product is decent, but nothing extraordinary. It does the job, but there are better options available in the market.", "3"],
  ["I love it!", "Wow, what a game-changer! This product has transformed my life. I can't imagine living without it now.", "5"],
  ["Meh, honestly", "I had high hopes for this product, but unfortunately, it fell short. It didn't live up to the hype and left me disappointed.", "2"],
  ["Amazing!", "This is hands down the best product I've ever used! It delivers exceptional results and is worth every penny.", "5"],
  ["Not my favorite", "I wouldn't recommend this product. It caused irritation and didn't provide the desired outcome.", "2"],
  ["Pretty Good!", "I'm pleasantly surprised by this product! It's affordable, effective, and has become a staple in my beauty routine.", "4"],
  ["Average product", "This product is just average. It does what it claims, but I expected more based on the reviews I read.", "3"],
  ["Incredible!!!", "I'm completely blown away by this product! It has exceeded all my expectations and I can't praise it enough.", "5"],
  ["Not worth it", "I'm not impressed with this product. It didn't deliver the promised results and I found it to be overpriced for what it offers.", "2"],
  ["It is what it is", "This product is decent, but nothing extraordinary. Better options available in the market.", "3"],
  ["OKKKK I am in LOVE","The product exceeded my expectations. It is well-designed, durable, and performs flawlessly. Highly recommended!", "5"],
  ["Are you kidding??", "I'm disappointed with the product. It arrived damaged, and the quality is subpar. Not worth the price.", "1"],
  ["Where have you been all my life", "This is the best product I've ever bought. It's versatile, easy to use, and has improved my daily routine significantly.", "5"],
  ["Just okay :/", "The product didn't meet my expectations. It lacks important features and feels cheaply made. I wouldn't purchase it again.", "2"],
  ["Better than I expected", "I'm impressed with the product's performance. It's fast, efficient, and the results are outstanding. Well worth the investment.", "5"],
  ["Not for me.", "I regret buying this product. It stopped working after a few uses, and the customer support was unhelpful. Stay away!", "2"],
  ["Five stars!!", "I love this product! It's stylish, functional, and enhances my productivity. Definitely a game-changer.", "5"],
  ["Satisfied customer here!", "The product arrived on time and in perfect condition. It's exactly as described and works like a charm.", "4"],
  ["Not sure what other people see in this.", "I'm not satisfied with the product's quality. It feels flimsy and doesn't live up to its advertised features.", "2"],
  ["As expected", "This product is a great value for the price. It performs exceptionally well and has become an essential part of my daily routine.", "5"],
  ["Not for me", "The product didn't work as expected. It's unreliable and inconsistent. I wouldn't recommend it to others.", "2"],
  ["Great gift", "I'm extremely happy with this purchase. The product is of high quality, and the customer service was excellent.", "5"],
  ["Returning this ASAP", "The product is a disappointment. It broke within days of use, and the manufacturer didn't provide adequate support.", "1"],
  ["YES! yes! yes!", "This product is a game-changer. It has simplified my life and surpassed all my expectations. I can't imagine living without it.", "5"],
  ["Classic design", "The product's design is sleek and modern. It's a perfect blend of form and function. Highly recommended!", "5"],
  ["Yikes.", "I'm not impressed with this product. It feels cheaply made, and the performance is lackluster.", "2"],
  ["Stunning", "This product is a must-have. It's intuitive, efficient, and has made my daily tasks much easier.", "5"],
  ["Not impressed.", "The product arrived late, and the packaging was damaged. Not a good first impression.", "2"],
  ["So so", "I'm underwhelmed by the product's performance. It's not as effective as I had hoped and feels overpriced.", "3"],
  ["I love it. WOW.", "I can't imagine my life without this product. It has become an indispensable tool that I rely on every day.", "5"],
  ["Bleeh", "The product didn't live up to the hype. It's mediocre at best and doesn't offer any standout features.", "2"],
  ["Bold!! I see you!", "I'm thoroughly impressed with this product. It's well-crafted, reliable, and delivers exceptional results.", "5"],
  ["Still waiting", "The product arrived missing pieces, and the manufacturer has been unresponsive. Terrible customer service.", "1"],
  ["Good!", "I'm satisfied with the product's performance. It does exactly what it claims and has improved my workflow.", "4"],
  ["Not worth the money!", "This product is a letdown. It's poorly designed and doesn't work as advertised. Save your money.", "1"],
  ["So useful!", "I'm amazed by the product's versatility. It has exceeded my expectations and opened up new possibilities.", "5"],
  ["Expensive.", "The product is overpriced for its quality. It feels cheaply made, and I expected better durability.", "3"],
  ["I use it daily!", "This product has transformed my routine. It's efficient, reliable, and has saved me a lot of time.", "5"],
  ["Disappointing.", "I'm disappointed with this purchase. The product arrived damaged, and the customer support has been unhelpful.", "2"],
  ["Satisfied!", "The product is a solid performer. It's reliable, user-friendly, and has become an essential part of my routine.", "4"]
]

rand(20..30).times do |i|
  product = Product.order("RANDOM()").first
  current_review = review_content.sample()
  review = product.reviews.create!(
    title: current_review[0],
    body: current_review[1],
    rating: current_review[2],
    reviewer_id: User.order("RANDOM()").first.id,
    product_id: product.id,
    helpful: rand(0..10)
  )
end