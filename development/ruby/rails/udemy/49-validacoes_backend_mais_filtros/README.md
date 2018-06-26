# Validações no Backend + Filtros

No rails as validações são conhecidas como `ActiveRecord Validations`.

Link: [Documentação Oficial](http://guides.rubyonrails.org/active_record_validations.html)

## Filters

Permite que um metódo seja executado antes, ou antes e depois de uma ação do controller.

Link: [Documentação Oficial](http://guides.rubyonrails.org/action_controller_overview.html#filters)

```
before_action :method_name, only: [:action1, :action2]
before_action :method_name, except: [:action1]

------ exemplo ------

before_action :set_contact, only: [:show, :edit, :update, :destroy]
```
