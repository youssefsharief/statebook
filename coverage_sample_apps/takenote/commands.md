npm run client
npm run server
npx cypress open
npx istanbul-combine -d  combined -p summary -r lcov .nyc_output\out.json unitCoverage\coverage-final.json
npx nyc merge
