# simuladoWeb

## Instalando NEXTJS

```bash
npx create-next-app@latest
```

### Refazer o db para testar do zero
- (Como os ids são autoincrementais se você deletar o id 1 o proximo a ser inserido será id 2 mesmo se a tabela estiver vazia.)

```bash
rm ./prisma/dev.db
npx prisma db push
npx prisma migrate deploy
```
