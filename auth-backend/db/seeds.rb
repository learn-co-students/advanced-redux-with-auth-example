# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  User.create({ username: Faker::RickAndMorty.character, password: "1" })
end

100.times do
  Post.create(title: Faker::Company.catch_phrase, content: Faker::Hipster.paragraph(6, true, 4), user: User.all[rand(100)+1])
end

200.times do
  Comment.create(content: Faker::FamilyGuy.quote, post: Post.all[rand(100)+1], user: User.all[rand(100)+1])
end