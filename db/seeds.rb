roles = ['teacher', 'ta', 'student']
5.times do
  course = Course.create(
    name: Faker::Beer.brand
  )
  3.times do
    user = User.create(
      first_name: Faker::ChuckNorris.fact,
      last_name: Faker::Kpop.solo
    )
    Enrollment.create(
      role: roles.sample,
      course_id: course.id,
      user_id: user.id
    )
  end
end
puts "Data Seeded"