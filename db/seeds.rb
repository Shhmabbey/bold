require 'open-uri'

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users') #this resets the id
Category.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('categories')
Product.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('products')
Review.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
# Cart.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('carts')
# CartProduct.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('Cart_products')


# USER SEEDS
demo = User.create!(first_name: 'Demo', last_name: 'User', email: 'demo@email.com', password: 'password')
6.times do |i|
  user = User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 6, max_length: 14, mix_case: true, special_characters: true)
  )
end
# END

categoryList = [
  ['Women'],
  ['Men'],
  ['Home'],
  ['Pets'],
  ['Coming Soon'],
  ['Clothing', 1],
  ['Shoes', 1],
  ['Accessories', 1],
  ['Bags', 1],
  ['Clothing', 2],
  ['Shoes', 2],
  ['Accessories', 2],
  ['Bag & Backpacks', 2],
]
categoryList.each { |category| Category.create!( title: category[0], parent_category_id: (category[1] ||= nil) ) }


# PET PRODUCTS SEEDS
# Cashmere Cable Knit Dog Sweater ##
cashmereDogSweater = Product.create!(
  title: `Cashmere Cable Knit Dog Sweater`,
  description: `Introduce your furry friend to the coziness of 100% cashmere with our soft cable-knit sweater. Boasting a ribbed neck and sleeves for added comfort, it’s perfect for keeping your cold weather-sensitive pup nice and warm or just simply letting your dog make their own style statement. Either way, it’s worth the tail wagging.`,
  price: 55.00,
  stock: 10,
  category_id: 1
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
  title: `Maxwell Pet Bed`,
  description: `Your best friend deserves the very best. Made for style, durability, and comfort, this pet bed will be as aesthetically pleasing to you as it is plush for your furry companion.`,
  price: 30.00,
  stock: 10,
  category_id: 1
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
    title: `Double Pet Bowl`,
    description: `Sleek and practical, this design marvel features two removable bowls with smooth, glass-like surfaces that make cleaning a snap. `,
    price: 16.00,
  stock: 10,
  category_id: 4
)

file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb1.jpeg')
file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb2.jpeg')
file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb3.jpeg')
doublePetBowl.photos.attach(io: file1, filename: 'pets/gdb1.jpeg')
doublePetBowl.photos.attach(io: file2, filename: 'pets/gdb2.jpeg')
doublePetBowl.photos.attach(io: file3, filename: 'pets/gdb3.jpeg')

rand(20..30).times do |i|
  product = Product.order("RANDOM()").first

  review = product.reviews.create!(
    title: Faker::TvShows::RickAndMorty.quote,
    body: Faker::Hipster.paragraph(sentence_count: 2, supplemental: true),
    rating: Faker::Number.between(from: 1, to: 5),
    reviewer_id: User.order("RANDOM()").first.id,
    product_id: product.id,
    helpful: Faker::Number.between(from: 0, to: 3),
    # title: Faker::Hipster.sentence(10),
  )
end