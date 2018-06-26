# Gems

São bibliotecas ou conjuntos de arquivos Ruby reutilizáveis, etiquetados com um nome e uma versão.

Site oficial: [rubygems.org](https://rubygems.org/)

Comandos:

```
- LIST ( lista todas as gems locais instaladas )
  $ gem list mime ( lista todas as gems com nome mime )
  $ gem list <gem> --remote ( lista e pesquisa o nome especificado de forma remota )
  $ gem list <gem> --remote --all ( lista e todas gems e versões desenvolvidas )

- INSTALL ( instala uma gem ou mais )
  $ gem install <gem> | gem install cpf_utils
  $ gem install <gem> -v <version> | gem install cpf_utils -v 1.0.0

- UNINSTALL
  $ gem uninstall <gem>
  $ gem uninstall <gem> -v 1.0.0

- CLEANUP ( remove versões antigas das engenhocas )
  $ gem cleanup
  $ gem cleanup <gem> ( remove uma versão específica )
  $ gem clenup -d ( verifica quais gems Serão apagadas por serem antigas)

- gem update ( atualiza todas as gems )
- gem upgrade
```
