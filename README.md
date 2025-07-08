# wikibase-rest-api-ts

Typescript model and API code for interacting with the REST API of a Wikibase instance (like Wikidata).

## Usage

Read the [official OpenAPI specification for the Wikibase REST API at this link](https://doc.wikimedia.org/Wikibase/master/js/rest-api/).
Depending on the tags of the method you want to use, initialize an object of the relevant API class and call the appropriate method:
- `AliasesApi`
- `DescriptionsApi`
- `ItemsApi`
- `LabelsApi`
- `PropertiesApi`
- `SitelinksApi`
- `StatementsApi`

### Example

Suppose you want to get the label of [Wikidata item Q1](https://www.wikidata.org/wiki/Q1) in english.
From [the OpenAPI specification](https://doc.wikimedia.org/Wikibase/master/js/rest-api/) you find out that the appropriate method is [`GET /entities/items/{item_id}/labels/{language_code}`](https://doc.wikimedia.org/Wikibase/master/js/rest-api/#/labels/getItemLabel), under the tag `labels` (=> **`LabelsApi`**).
You don't need to specify which instance to use because Wikidata is the default.
```js
import { LabelsApi } from "wikibase-rest-api-ts";
const api = new LabelsApi();
api.getItemLabel({
        itemId: "Q1", languageCode: "en"
    }).then(
        label => console.log(`English label for Q1 is ${label}`)
    );
```

#### Custom instance

If instead of Wikidata you want to use another Wikibase instance you need to pass its REST API base URL while initializing the API:
```js
import { Configuration, DescriptionsApi } from "wikibase-rest-api-ts";
const api = new DescriptionsApi(new Configuration({
        basePath: "https://url-to-my-wikibase-instance/w/rest.php/wikibase",
    }));
api.getItemDescription({
        itemId: "Q1", languageCode: "en"
    }).then(
        desc => console.log(`English description for Q1 is ${desc}`)
    );
```

#### Authentication and write operations

If you need to upload changes to the data you will need first to create an OAuth access token following the [instructions at this link](https://www.wikidata.org/wiki/Wikidata:REST_API/Authentication).
Then you will need to pass the Authorization header for each call:
```js
import { Configuration, DescriptionsApi } from "wikibase-rest-api-ts";
const api = new DescriptionsApi(new Configuration({
        headers: { Authorization: "Bearer " + YOUR_TOKEN }
    }));
api.replaceItemDescription({
        itemId: "Qxxx",
        languageCode: "en",
        replaceItemDescriptionRequest: {
            description: "New description of the item",
            comment: "Comment of your edit"
        }
    });
```

## Further info

For further info and to contribute, see [CONTRIBUTING.md](./CONTRIBUTING.md).
