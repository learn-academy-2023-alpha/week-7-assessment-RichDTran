# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
# This is called a Ruby class which inherits from the ApplicationController and has methods.
# BlogPostsController is calling from application Controller. In this example of a file we can see  BlogPostsController has many methods in this case the CRUD methods and is called upon the ApplicationController. Also as an analogy the controller is a middleman between models and views for the front end to retrieve and display while the back end can be used in the "back" of databases and applications.
  def index
    # ---2)
    @posts = BlogPost.all
    #In this method it is used to display the collection of data inputted and made in the Ruby console. It is the source where all the data resides in i.e, a Database.  This is a GET requests from the RESTful CRUDs.
  end

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
    #In this method we are able retrieve specific data from the index database by using parameters of unique ids this is an Active Record call. In a very large database we can find particular data which makes searching by their IDs a lot easier rather than scrolling through information.
    #This is a RESTful route.
  end

  # ---4)
  def new
    @post = BlogPost.new
    #In this method we are able to add information on our web application and is stored in the database. This is part of RESTful as well and displays a form for users.
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
      #This is a RESTful route that submits user data to the database. This create action will call the strong params method which is a security barrier or protection  where specific requirements are only permitted otherwise returns an error.
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
    #This is a RESTful route that gives the ability to edit existing data from the database.
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
      #This is a RESTful route that modifys an existing item in the database. In order to do this like edit requires parameters of an id. This also uses the strong param method since we are modifying the database. Redirect is when submitting the change the user will be rerouted to the post view page.
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
      #This is another RESTful route that deletes content or data from the database. When submitted user will be rerouted to the new blog post.
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
    #This is a layer of protection from external sources requiring specific data being entered which is why on line 70 .permit (:title, :content) is the only data that can be entered. Private is also known as "strong_params"
  end
end
