# id='' sh client/curl-scripts/item/show.sh
# id can = 'basic'/'intermediate'/'enterprise'

curl "http://localhost:5000/api/v1/product/${id}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \

echo
