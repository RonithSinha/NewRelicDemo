# NewRelicDemo
Demo for using New Relic Analytics in Ionic App

Personal Account Details:
Account ID: 3441090
License Key: 279bdfc9c03f3e2ac0605236d3a8c7d4348bNRAL
USER Key: NRAK-LYA6PNNSO08IYB0074A1C5FTSNK
App Token: AAc5d843b2865ef9e19873e9ce408a7162529c9354-NRMA
userId: 1000710463

NRQL for querying page data:
{
  actor {
    account(id: 3441090) {
      nrql(query: "SELECT * FROM NewRelicPageData SINCE 7 DAYS AGO") {
        results
      }
    }
  }
}

New Relic Curl command: 

curl https://api.newrelic.com/graphql \
  -H 'Content-Type: application/json' \
  -H 'API-Key: NRAK-LYA6PNNSO08IYB0074A1C5FTSNK' \
  --data-binary '{"query":"{\n  actor {\naccount(id: 3441090) {\nnrql(query: \"SELECT * FROM NewRelicUrlData SINCE 1648924200000 UNTIL 1649788200000\") {\n        results\n      }\n    }\n  }\n}\n", "variables":""}'
