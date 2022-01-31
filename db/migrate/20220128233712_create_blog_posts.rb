class CreateBlogPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :blog_posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :text
      t.string :tags

      t.timestamps
    end
  end
end
