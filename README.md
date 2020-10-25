## Lancement du server mysql :
>Préférence Système...
Icône MySQL
----------
## Mysql par le terminal

### Ou se trouve le dossier mysql :
>type -a mysql
>*mysql is /usr/local/mysql/bin/mysql*

### Connection de root
>cd /user/local/mysql/
bin/mysql -u root -p [BdD]
c...9

### Connection de pink
>cd /user/pink/mysql/
bin/mysql -u root -p [BdD]
c...2

>use elevage;
show tables;

http://localhost:3000/api/Animal

## Créa backend

vidéo MySQL Node Express API - Walkthrough https://www.youtube.com/watch?v=LVfH5FDOa3o&t=9s

### Création de npm	

* npm init -y
* npm i express mysql
* npm i -D nodemon
* Effacer le script *test* et saisir :
    >"scripts": {
        "dev": "npx nodemon server/server.js -w server"
      },
* Lancer le script *dev* par : npm run dev
