# Rails Console & ActiveRecord

## Rails Console

É um REPL que carrega em sua inicialização o ambiente do projeto corrente.

## ActiveRecord

#### Create

```
kind = Kind.new
kind.description = 'New Kind'
kind.save!

------ ou ------

kind2 = Kind.create description: 'New Kind 2'
```

#### Read

```
<Model>.all
<Model>.first
<Model>.first
<Model>.where

------ exemplo ------

Kind.all
Kind.first
Kind.last
Kind.where description: 'New Kind'
```

#### Update

```
<Model>.find / save
<Model>.find / update
<Model>.update_all 'field = value'

------ exemplo ------

k = Kind.find(1)
k.description = 'NEW KIND'
k.save!

---

k.update description: 'New Kind'
```

#### Delete

```
<Model>.find / destroy

------ exemplo ------

k = Kind.last
k.destroy
```
