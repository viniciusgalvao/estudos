# Associação has_many

```
class Kind < ApplicationRecord
  has_many :contacts
end

class Contact < ApplicationRecord
  belongs_to :kind
end
```

Para criar um contato a partir de um `kind(tipo)`:

```
friend_kind = Kind.last
friend_kind.contacts.create(name: "John Snow", email: "john@gameofthrones.com", rmk: "obs")
```

Para adicionar um `kind(tipo)` a um contato existente:

```
friend_kind = Kind.find_by_name('Friend')

# --- Where the magic happens --- #

contact = Contact.create name: 'John', 'john@gmail.com', rmk: 'obs...'

# Associando um contato a um kind
friend_kind.contacts << contact
```
