class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.date :due_at

      t.timestamps
    end
  end
end
