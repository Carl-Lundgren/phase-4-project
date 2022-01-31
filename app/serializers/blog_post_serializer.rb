class BlogPostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :tags
end
