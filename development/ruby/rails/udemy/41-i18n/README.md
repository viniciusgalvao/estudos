# I18n - Internationalization

[Documentação Oficial](http://guides.rubyonrails.org/i18n.html)

## Translate

É uma tradução direta, onde você entrega uma chave e ele traduz aquela chave para você.

## Localize

Trás para o seu idioma padrão, por exemplo: data, hora e formatos locais.

## Ativando

Para ativar as traduções, no arquivo `config/application.rb`

```
# I18n
config.i18n.default_locale = :"pt-BR"
```

## Funções

```
I18n.translate
I18n.localize

------ abreviado ------

I18n.t
I18n.l

------ Views ------

t
l
```

## GEM

Para facilitar, utilizar a gem `rails-i18n`

## ActiveRecord

```
> config/locales/models.pt-BR.yml

"pt-BR":
  activerecord:
    models:
      kind: "Tipo"
      contact: "Contato"
    attributes:
      kind:
        description: "Descrição"
      contact:
        name: "Nome"
        email: "Email"
        kind: "Tipo de Contato"
        rmk: "Obs"
```

## Dica

Para deixar a definição de idioma baseada na url

```
before_action :set_locale

private
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
```
