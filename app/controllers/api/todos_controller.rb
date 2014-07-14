class Api::TodosController < ApplicationController

  respond_to :json

  before_action :enforce_api_login
  before_action :ensure_json_request
  before_action :set_todo, only: [:show, :update, :destroy]
  before_action :enforce_ownership, only: [:show, :update, :destroy]

  # GET /api/todos
  def index
    @todos = current_user.todos
  end

  # GET /api/todos/1
  def show
  end

  # POST /api/todos
  def create
    @todo = Todo.new(todo_params.merge({ user: current_user }))

    respond_to do |format|
      if @todo.save
        format.json { render :show, status: :created, location: api_todo_url(@todo) }
      else
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/todos/1
  def update
    respond_to do |format|
      if @todo.update(todo_params)
        format.json { render :show, status: :ok, location: api_todo_url(@todo) }
      else
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/todos/1
  def destroy
    @todo.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private


    # Only allow users with active session
    def enforce_api_login
      if !user_signed_in?
      render :nothing => true, :status => 401
      end
    end

    # Only allow owner to perform certain actions
    def enforce_ownership
      if @todo.user != current_user
      render :nothing => true, :status => 403
      end
    end

    # Only calls requesting json should be allowed
    def ensure_json_request
      return if request.headers["Accept"] =~ /json/
      render :nothing => true, :status => 406
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # White list allowed attributes
    def todo_params
      params.require(:todo).permit(:title, :due_at)
    end
end
