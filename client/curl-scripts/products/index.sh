# sh client/curl-scripts/products/index.sh

curl 'http://localhost:5000/api/v1/products' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

echo