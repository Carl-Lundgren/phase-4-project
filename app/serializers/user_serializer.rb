class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :blog_posts, serializer: BlogPostSerializer
end
