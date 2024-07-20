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
```js
import { LabelsApi } from "wikibase-rest-api-ts";
const api = new LabelsApi();
api.getItemLabel({
        itemId: "Q1", languageCode: "en"
    }).then(
        label => console.log(`English label for Q1 is ${label}`)
    );
```

Suppose instead you want to get the description for an entity on another Wikibase instance.
From the specification you find the [`GET /entities/items/{item_id}/descriptions/{language_code}`](https://doc.wikimedia.org/Wikibase/master/js/rest-api/#/descriptions/getItemDescription) call under the tag `descriptions` (=> **`DescriptionsApi`**):
```js
import { Configuration, DescriptionsApi } from "wikibase-rest-api-ts";
const api = new DescriptionsApi(new Configuration({
        basePath: "https://url-to-my-wikibase-instance/w/rest.php/wikibase/v0",
    }));
api.getItemDescription({
        itemId: "Q1", languageCode: "en"
    }).then(
        desc => console.log(`English description for Q1 is ${desc}`)
    );
```

## Further info

For further info and to contribute, see [CONTRIBUTING.md](https://gitlab.com/openetymologymap/wikibase-rest-api-ts/-/blob/main/CONTRIBUTING.md).
