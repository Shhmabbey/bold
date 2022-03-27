# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# ActiveRecord::Base.transaction do
  User.destroy_all
  # ActiveRecord::Base.connection.reset_pk_sequence!('users') #this resets the id
  user1 = User.create!(first_name: 'Demo', last_name: 'User', email: 'test123', password: 'password')
# end

Product.destroy_all
Review.destroy_all
Cart.destroy_all

# PET PRODUCTS SEEDS
## Cashmere Cable Knit Dog Sweater ##
# cashmereDogSweater = Product.create!(
#   title: "Cashmere Cable Knit Dog Sweater",
#   description: "Introduce your furry friend to the coziness of 100% cashmere with our soft cable-knit sweater. Boasting a ribbed neck and sleeves for added comfort, it’s perfect for keeping your cold weather-sensitive pup nice and warm or just simply letting your dog make their own style statement. Either way, it’s worth the tail wagging.",
#   price: 55.00,
#   stock: 10,
#   category_id: 1
# )
# file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds1.jpeg')
# file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds2.jpeg')
# file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds3.jpeg')
# file4 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds4.jpeg')
# file5 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/cds5.jpeg')
# cashmereDogSweater.photos.attach(io: file1, filename: 'pets/cds1.jpeg')
# cashmereDogSweater.photos.attach(io: file2, filename: 'pets/cds2.jpeg')
# cashmereDogSweater.photos.attach(io: file3, filename: 'pets/cds3.jpeg')
# cashmereDogSweater.photos.attach(io: file4, filename: 'pets/cds4.jpeg')
# cashmereDogSweater.photos.attach(io: file5, filename: 'pets/cds5.jpeg')

# ## Maxwell Pet Bed ##
# maxwellPetBed = Product.create!(
#   title: "Maxwell Pet Bed",
#   description: "Your best friend deserves the very best. Made for style, durability, and comfort, this pet bed will be as aesthetically pleasing to you as it is plush for your furry companion.",
#   price: 30.00,
#   stock: 10,
#   category_id: 1
# )
# file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb1.jpeg')
# file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb2.jpeg')
# file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb3.jpeg')
# file4 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb4.jpeg')
# file5 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/mpb5.jpeg')
# maxwellPetBed.photos.attach(io: file1, filename: 'pets/mpb1.jpeg')
# maxwellPetBed.photos.attach(io: file2, filename: 'pets/mpb2.jpeg')
# maxwellPetBed.photos.attach(io: file3, filename: 'pets/mpb3.jpeg')
# maxwellPetBed.photos.attach(io: file4, filename: 'pets/mpb4.jpeg')
# maxwellPetBed.photos.attach(io: file5, filename: 'pets/mpb5.jpeg')

## Double Pet Bowl ##
 doublePetBowl= Product.create!(
  title: "Double Pet Bowl",
  description: "Sleek and practical, this design marvel features two removable bowls with smooth, glass-like surfaces that make cleaning a snap. ",
  price: 16.00,
  stock: 10,
  category_id: 1
)
# file1 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb1.jpeg')
# file2 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb2.jpeg')
# file3 = URI.open('https://bold-dev.s3.us-west-1.amazonaws.com/pets/gdb3.jpeg')
# doublePetBowl.photos.attach(io: file1, filename: 'pets/gdb1.jpeg')
# doublePetBowl.photos.attach(io: file2, filename: 'pets/gdb2.jpeg')
# doublePetBowl.photos.attach(io: file3, filename: 'pets/gdb3.jpeg')

categoryList = [
  ['Women'],
  ['Men'],
  ['Home'],
  ['Pets'],
  ['Beauty'],
  ['Travel'],
  ['Jewelery'],
  ['Coming Soon'],
  ['Clothing', 1],
  ['Shoes', 1],
  ['Accessories', 1],
  ['Bags', 1],
  ['Jewelery', 1],
  ['Clothing', 2],
  ['Shoes', 2],
  ['Accessories', 2],
  ['Bag & Backpacks', 2],
  ['Bedding', 3],
  ['Bath', 3],
  ['Kitchen', 3]
]

categoryList.each do |category|
  Category.create!( title: category[0], category_id: category[1] )
end