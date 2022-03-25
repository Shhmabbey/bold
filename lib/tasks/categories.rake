namespace :categories do
  desc "Seeds categories"
  task seed_categories: :environment do
    Category.create!([
      {title: 'Women'},
      {title: 'Men'},
      {title: 'Home'},
      {title: 'Pets'},
      {title: 'Beauty'},
      {title: 'Travel'},
      {title: 'Jewelery'},
      {title: 'Coming Soon'}
      ])
  end
end
