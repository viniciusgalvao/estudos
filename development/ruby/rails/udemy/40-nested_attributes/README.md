# Nested Attributes

É utilizado quando queremos criar um aninhamento de informações em um formulário de objetos diferentes

## Gem Úteis

```
# Dynamic nested forms using jQuery made easy; works with formtastic, simple_form or default forms
gem 'cocoon' (has_many)
```

## Modelo

No exemplo abaixo temos dois modelos `contact` e `address`, e na hora que cadastrar o contato, preciso cadastrar o endereço.

**- model**

```
> app/model/contact.rb

class Contact < ApplicationRecord
  has_one :address
  has_many :phones

  accepts_nested_attributes_for :address
  accepts_nested_attributes_for :phones
end
```

**- view**

```
> app/views/contact/_form.html.erb

<div class="field">
  <%= form.label :name %>
  <%= form.text_field :name, id: :contact_name %>
</div>

<div class="field">
  <%= form.label :email %>
  <%= form.text_field :email, id: :contact_email %>
</div>

<!-- EXEMPLO NESTED ATTRIBUTES | Address -->

<! --- ADDRESS / HAS_ONE --->
<%= form.fields_for :address do |address_fields| %>
  <div class="field">
    <%= address_fields.label :street %>
    <%= address_fields.text_field :street %>
  </div>
  <div class="field">
    <%= address_fields.label :city %>
    <%= address_fields.text_field :city %>
  </div>
  <div class="field">
    <%= address_fields.label :state %>
    <%= address_fields.text_field :state %>
  </div>
<% end %>
<! --- END ADDRESS / HAS_ONE --->

<! --- PHONES / HAS_MANY --->
<%= form.fields_for :phones do |phones_fields| %>
  <div class="field">
    <%= phones_fields.label :phone %>
    <%= phones_fields.text_field :phone %>
  </div>
<% end %>
<! --- END PHONES / HAS_MANY --->

<!-- FIM NESTED ATTRIBUTES -->
```

**- controller**

```
> app/controllers/contacts_controller.rb

class ContactsController < ApplicationController
  def new
    @contact = Contact.new

    # belongs_to
    @contact.build_address (construindo um objeto endereço vazio)

    # has_many
    @contact.phones.build
  end

  private
    def contact_params
      params.require(:contact).permit(:name, :email, :kind_id, :rmk,
        address_attributes: [:street, :city, :state],
        phones_attributes: [:id, :phone])
    end
end
```

## cocoon / helper / has_many

```
> helper

link_to_add_association (irá gerar o botão de adicionar + registro(s))
link_to_remove_associaton (irá gerar o botão para remover o registro)

> wrapper css class

.nested-fields (classe obrigatória no wrapper)
```

Example:

```
> _phone_fields

<div class="nested-fields">
  <div class="field">
    <%= f.label :phone %>
    <%= f.text_field :phone %>
    <!-- para remover o registro -->
    <%= link_to_remove_association 'remover', f %>
  </div>
</div>

----------------

> _form.html.erb

<div id="phones">
  <%= form.fields_for :phones do |phones_fields| %>
    <%= render partial: 'phone_fields', locals: { form: phones_fields } %>
  <% end %>
  <!-- para adicionar um novo registro -->
  <%= link_to_add_association '[Adicionar Telefone]', form, :phones %>
</div>
```
