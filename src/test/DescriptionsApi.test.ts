import { API_BASE_PATH, BEARER_TOKEN, ENTITY, ENTITY_DESCRIPTION, PROPERTY, PROPERTY_DESCRIPTION } from "./constants";
import { Configuration, DescriptionsApi, ResponseError } from "../../dist";
// import { DescriptionsApi } from "wikibase-rest-api-ts";

const api = new DescriptionsApi(new Configuration({
    basePath: API_BASE_PATH,
    headers: BEARER_TOKEN ? { Authorization: "Bearer " + BEARER_TOKEN } : undefined
}));

describe("Item description write", () => {
    if (!BEARER_TOKEN) {
        test.skip("replaceItemDescription", () => { });
    } else {
        test("replaceItemDescription", async () => {
            try {
                const descr = await api.replaceItemDescription({
                    itemId: ENTITY,
                    languageCode: "en",
                    replaceItemDescriptionRequest: {
                        description: ENTITY_DESCRIPTION,
                        comment: "test replaceItemDescription"
                    }
                });
                expect(descr).toBeTruthy();
                expect(descr).toMatch(ENTITY_DESCRIPTION);
            } catch (e) {
                if (e instanceof ResponseError) {
                    console.error("replaceItemDescription error", e, await e.response.text());
                }
                throw e;
            }
        });
    }
});

describe("Item description read", () => {
    test("getItemDescription", async () => {
        const descr = await api.getItemDescription({ itemId: ENTITY, languageCode: "en" });
        expect(descr).toBeTruthy();
        expect(descr).toMatch(ENTITY_DESCRIPTION);
    });

    test("getItemDescriptions", async () => {
        const descrs = await api.getItemDescriptions({ itemId: ENTITY });
        expect(descrs).toBeTruthy();
        expect(typeof descrs).toMatch("object");
        expect(descrs.en).toMatch(ENTITY_DESCRIPTION);
    });
});

describe("Property descriptions read", () => {
    test("getPropertyDescription", async () => {
        const descr = await api.getPropertyDescription({ propertyId: PROPERTY, languageCode: "en" });
        expect(descr).toBeTruthy();
        expect(descr).toMatch(PROPERTY_DESCRIPTION);
    });

    test("getPropertyDescriptions", async () => {
        const descrs = await api.getPropertyDescriptions({ propertyId: PROPERTY });
        expect(descrs).toBeTruthy();
        expect(typeof descrs).toMatch("object");
        expect(descrs.en).toMatch(PROPERTY_DESCRIPTION);
    });
});
