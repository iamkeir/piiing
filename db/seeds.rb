user_1 = User.new
user_1.nickname = "penelopehelen"
user_1.image = "https://pbs.twimg.com/profile_images/722882947779530752/_X9F81V7_400x400.jpg"
user_1.save

ping_1 = Ping.new
ping_1.lat = 51.447851
ping_1.lng = -2.612638
ping_1.user = user_1
ping_1.save

user_2 = User.new
user_2.nickname = "iamkeir"
user_2.image = "https://pbs.twimg.com/profile_images/722882947779530752/_X9F81V7_400x400.jpg"
user_2.save

ping_2 = Ping.new
ping_2.lat = 51.447918
ping_2.lng = -2.608003
ping_2.user = user_2
ping_2.save
