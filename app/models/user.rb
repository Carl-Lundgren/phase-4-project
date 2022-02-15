class User < ApplicationRecord
    has_many :blog_posts

    validates :username, presence: true, uniquness: true
end
