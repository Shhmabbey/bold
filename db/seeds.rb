require 'open-uri'

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users') #this resets the id
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

14.times do |i|
  user = User.create!(
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
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


rand(20..30).times do |i|
  product = Product.order("RANDOM()").first

  review = product.reviews.create!(
    title: "Title Sample",
    body: "Body Sample",
    rating: "1",
    reviewer_id: User.order("RANDOM()").first.id,
    product_id: product.id,
    helpful: "1"
  )
end