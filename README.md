# An Encryptor

Encrypts and turns the encrypted message into binary

![image](https://user-images.githubusercontent.com/101835324/182137480-08e21c78-773a-4813-8e9d-dbbe194c08a6.png)

How it works? (for now only in Portuguese)

Esta criptografia funciona em 3 passos

Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas são deslocadas X posições para a direita (esse valor deve ser dito no momento da encriptação), segundo a tabela ASCII: letra 'a' vira letra 'd', letra 'y' vira o caractere '|' e assim sucessivamente. Na segunda passada, todo e qualquer caractere é deslocados uma posição para a esquerda na tabela ASCII. Neste caso, 'b' vira 'a' e 'a' vira '`'. Na terceira e última passada, a linha deverá ser invertida. (Inspirado do desafio 1024 da plataforma Beecrowd)

A mensagem criptografada é traduzida para binário.
