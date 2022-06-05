echo "Downloading import map from S3"
aws s3 cp s3://single-spa-demo-femiarks/@femiarks/importmap.json importmap.json
echo "Updating import map to point to new version of @femiarks/root-config"
node update-importmap.mjs
echo "Uploading new import map to S3"
aws s3 cp importmap.json s3://single-spa-demo-femiarks/@femiarks/importmap.json --cache-control 'public, must-revalidate, max-age=0' --acl 'public-read'
echo "Deployment successful"
