docker build --no-cache -f SQL\Dockerfile.PostgreSql -t olog/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t olog/app ../..
