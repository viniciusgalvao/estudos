# Conhecendo o Rails Assets

[Site](http://rails-assets.org)

## Uso

Para utilizar basta procurar o asset desejado no site e seguir as instruções.

```
source 'https://rails-assets.org' do
  gem 'rails-assets-notifyjs'
end

--- formato inline ---

gem 'rails-assets-notifyjs', source: 'https://rails-assets.org'
```

Depois basta executar `bundle install` e chamar os assets.

```
//= require jquery
//= require jquery_ujs
//= require cocoon
//= require notifyjs
//= require tree .
```