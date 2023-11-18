docker build --no-cache -f SQL\Dockerfile.PostgreSql -t olog-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t olog-java/app ../../..
