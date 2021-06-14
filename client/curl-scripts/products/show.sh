# sh client/curl-scripts/item/show.sh

curl 'http://localhost:5000/api/v1/product' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

echo
