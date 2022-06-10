#!/usr/bin/env bash

if [ ! -f .env ]
then
  export $(grep -v '^#' .env | xargs)
fi

docker-compose --env-file ./.env -f docker-compose.yml -p web down
docker system prune -f
docker network create nexus
docker rmi registry.basicit.co.kr/branddesk/web-backend-${BUILD_PROFILE}
docker rmi registry.basicit.co.kr/branddesk/web-ui-${BUILD_PROFILE}

docker login registry.basicit.co.kr --username $REGISTRY_USERNAME --password  $REGISTRY_PASSWORD
for run in {1..10}; do
  if docker pull registry.basicit.co.kr/branddesk/web-backend-${BUILD_PROFILE}; then
      echo "success"
      break
  else
      echo "Error Sleeping 2 seconds"
      sleep 2
  fi

    if docker pull registry.basicit.co.kr/branddesk/web-ui-${BUILD_PROFILE}; then
        echo "success"
        break
    else
        echo "Error Sleeping 2 seconds"
        sleep 2
    fi
done

HOSTNAME=`hostname -f`
docker-compose --env-file ./.env -f docker-compose.yml -p web up -d

