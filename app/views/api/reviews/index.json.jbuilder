@reviews.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
    json.userName review.reviewer.first_name + " " + review.reviewer.last_name
  end
end
