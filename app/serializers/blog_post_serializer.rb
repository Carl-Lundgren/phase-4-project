class BlogPostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :tags
  belongs_to :user, serializer: UserSerializer
end
