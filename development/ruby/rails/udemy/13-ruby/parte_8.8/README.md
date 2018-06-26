# Módulos e Mixins

## Módulos

Os módulos ruby são similares a classes em relação ao fato de que também armazenam uma coleção de metódos,
constantes e outras definições de módulos e classes.

Entretanto, diferente das classes, você não pode criar objetos baseados em módulos nem pode criar módulos
que herdam desse módulo; ao invés disso, você especifica qual funcionalidade de um módulo específico você deseja
adicionar a uma classe ou a um objeto específico.

Eles permanecem sozinhos; não há hierarquia de módulos ou herança. Módulos são um bom lugar para armazenar constantes em um local centralizado.

### Objetivos de uso

Primeiro eles agem como **namespaces**, permitiondo que você defina metódos cujos nomes não irão colidir com aqueles definidos em outras partes de um programa.

Em segundo lugar, permitem que você compartilhe funcionalidade entre classes - se uma classe "mistura" (mixes in) um módulo (isto é, o inclui), todos os metódos de instância do módulo se tornam disponíveis como se tivessem sido definidos na classe.
