import { API_BASE_PATH, ENTITY, ENTITY_LABEL, PROPERTY, PROPERTY_LABEL } from "./constants";
import { Configuration, LabelsApi, ResponseError } from "../../dist";
// import { LabelsApi } from "wikibase-rest-api-ts";

const api = new LabelsApi(new Configuration({
    basePath: API_BASE_PATH,
    headers: process.env.WB_BEARER_TOKEN ? { Authorization: "Bearer " + process.env.WB_BEARER_TOKEN } : undefined
}));

describe("Item labels write", () => {
    if (!process.env.WB_BEARER_TOKEN) {
        test.skip("replaceItemLabel", () => { });
    } else {
        test("replaceItemLabel", async () => {
            try {
                const label1 = await api.replaceItemLabel({
                    itemId: ENTITY,
                    languageCode: "en",
                    replaceItemLabelRequest: {
                        label: ENTITY_LABEL,
                        comment: "test replaceItemLabel"
                    }
                });
                expect(label1).toBeTruthy();
                expect(label1).toMatch(ENTITY_LABEL);
            } catch (e) {
                if (e instanceof ResponseError) {
                    console.error("replaceItemLabel error:", await e.response.text(), e);
                }
                throw e;
            }
        });
    }
});

describe("Item labels read", () => {
    test("getItemLabel", async () => {
        const label = await api.getItemLabel({ itemId: ENTITY, languageCode: "en" });
        expect(label).toBeTruthy();
        expect(label).toMatch(ENTITY_LABEL);
    });

    test("getItemLabels", async () => {
        const labels = await api.getItemLabels({ itemId: ENTITY });
        expect(labels).toBeTruthy();
        expect(typeof labels).toMatch("object");
        expect(Object.keys(labels)).toContain("en");
        expect(labels.en).toMatch(ENTITY_LABEL);
    });
});

describe("Property labels read", () => {
    test("getPropertyLabel", async () => {
        const label = await api.getPropertyLabel({ propertyId: PROPERTY, languageCode: "en" });
        expect(label).toBeTruthy();
        expect(label).toMatch(PROPERTY_LABEL);
    });

    test("getPropertyLabels", async () => {
        const labels = await api.getPropertyLabels({ propertyId: PROPERTY });
        expect(labels).toBeTruthy();
        expect(typeof labels).toMatch("object");
        expect(Object.keys(labels)).toContain("en");
        expect(labels.en).toMatch(PROPERTY_LABEL);
    });
});
