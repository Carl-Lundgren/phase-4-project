class User < ApplicationRecord
    has_many :blog_posts

    validates :username, presence: true, uniqueness: true
end
