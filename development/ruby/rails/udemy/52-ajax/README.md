# Ajax + Rails

## remote

Para ativar o AJAX no Rails, é nescessário adicionar a tag `remote: true` ao helper desejado.

```
link_to "Teste Ajax", phones_path, remote: true
```

No controller você pode responder de acordo com o formato requisitado.

```
class PhonesController < ApplicationController
  # GET /phones
  # GET /phones.json
  def index
    respond_to do |format|
      format.html { @phones = Phone.all.page(params[:page]).per(15) }
      format.js # requisições ajax utilizando o remote:true
    end
  end
end
```

Um arquivo deve ser criado nas views `index.js.erb`

O conteúdo desse arquivo é javascript.

```
index.js.erb
------------

alert('Chamada Ajax Rails!!');
```

O ciclo Rails Ajax: `browser > controller > js > browser`