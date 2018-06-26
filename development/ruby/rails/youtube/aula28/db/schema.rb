# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170502030554) do

  create_table "children", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "sex"
    t.integer  "father_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["father_id"], name: "index_children_on_father_id", using: :btree
  end

  create_table "fathers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "cpf"
    t.string   "email"
    t.integer  "occupation_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["occupation_id"], name: "index_fathers_on_occupation_id", using: :btree
  end

  create_table "occupations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_foreign_key "children", "fathers"
  add_foreign_key "fathers", "occupations"
end
