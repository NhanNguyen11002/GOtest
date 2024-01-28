# Deploy link
https://go-test-delta.vercel.app/
# Run on local guide
1. Install ruby, rbenv, rails
2. Install npm, node
3. Install MySQL
4. Create a .env file in backend directory

Content of the file
- database = shoes_db
- username = *username of mysql data base* (default: root)
- password = *password of mysql data base*
- host = localhost

5. Create a .env file in frondend directory

Content of the file
- REACT_APP_API_DOMAIN = http://localhost:3000
6.  At the root folder of project
  - run cd backend
  - run bundle install
  - run db:create
  - run db:migrate
  - run db:seed
  - rails s
7. At the root folder of project
  - run cd frontend
  - run npm i
  - run npm start
  
