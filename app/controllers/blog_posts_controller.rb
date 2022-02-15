class BlogPostsController < ApplicationController
    skip_before_action :authorize

    def index
        blog_posts = BlogPost.all
        render json: blog_posts
    end

    def create
        blog_post = BlogPost.create(post_params)
        render json: blog_post
    end

    def update
        blog_post = BlogPost.update(post_params)
        render json: blog_post
    end

    def destroy
        blog_post = BlogPost.find(params[:id])
        blog_post.destroy
    end

    def show
        blog_posts = BlogPost.find(params[:id])
        render json: blog_posts
    end

    private
        def post_params
            params.permit(:user_id, :text, :tags)
        end

end
