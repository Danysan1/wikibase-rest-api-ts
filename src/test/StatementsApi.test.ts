import { ENTITY, ENTITY_INSTANCE_ID, ENTITY_INSTANCE_VALUE, INSTANCE_PROPERTY, PROPERTY_INSTANCE_ID, PROPERTY_INSTANCE_VALUE, PROPERTY, API_BASE_PATH } from "./constants";
import { Configuration, StatementsApi } from "../../dist";
// import { StatementsApi } from "wikibase-rest-api-ts";

const api = new StatementsApi(new Configuration({
    basePath: API_BASE_PATH,
    headers: process.env.WB_BEARER_TOKEN ? { Authorization: "Bearer " + process.env.WB_BEARER_TOKEN } : undefined
}));

describe("Item statements", () => {
    test("getItemStatement", async () => {
        const stat = await api.getItemStatement({
            itemId: ENTITY, statementId: ENTITY_INSTANCE_ID
        });
        expect(stat).toBeTruthy();
        expect(typeof stat).toMatch("object");
        expect(stat.id).toMatch(ENTITY_INSTANCE_ID);
        expect(stat.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat.value?.content).toMatch(ENTITY_INSTANCE_VALUE);
    });

    test("getItemStatements", async () => {
        const stats = await api.getItemStatements({ itemId: ENTITY });
        expect(stats).toBeTruthy();
        expect(typeof stats).toMatch("object");

        expect(Object.keys(stats)).toContain(INSTANCE_PROPERTY);
        expect(stats[INSTANCE_PROPERTY]).toBeTruthy();
        const stat = stats[INSTANCE_PROPERTY].find(s => s.id === ENTITY_INSTANCE_ID);

        expect(stat).toBeTruthy();
        expect(stat?.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat?.value?.content).toMatch(ENTITY_INSTANCE_VALUE);
    });

    test("getItemStatements with property", async () => {
        const stats = await api.getItemStatements({
            itemId: ENTITY, property: INSTANCE_PROPERTY
        });
        expect(stats).toBeTruthy();
        expect(typeof stats).toMatch("object");

        expect(Object.keys(stats)).toContain(INSTANCE_PROPERTY);
        expect(stats[INSTANCE_PROPERTY]).toBeTruthy();
        const stat = stats[INSTANCE_PROPERTY].find(s => s.id === ENTITY_INSTANCE_ID);

        expect(stat).toBeTruthy();
        expect(stat?.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat?.value?.content).toMatch(ENTITY_INSTANCE_VALUE);
    });
});

describe("Property statements", () => {
    test("getPropertyStatement", async () => {
        const stat = await api.getPropertyStatement({
            propertyId: PROPERTY, statementId: PROPERTY_INSTANCE_ID
        });
        expect(stat).toBeTruthy();
        expect(typeof stat).toMatch("object");
        expect(stat.id).toMatch(PROPERTY_INSTANCE_ID);
        expect(stat.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat.value?.content).toMatch(PROPERTY_INSTANCE_VALUE);
    });

    test("getPropertyStatements", async () => {
        const stats = await api.getPropertyStatements({
            propertyId: PROPERTY
        });
        expect(stats).toBeTruthy();
        expect(typeof stats).toMatch("object");

        expect(Object.keys(stats)).toContain(INSTANCE_PROPERTY);
        expect(stats[INSTANCE_PROPERTY]).toBeTruthy();
        const stat = stats[INSTANCE_PROPERTY].find(s => s.id === PROPERTY_INSTANCE_ID);

        expect(stat).toBeTruthy();
        expect(stat?.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat?.value?.content).toMatch(PROPERTY_INSTANCE_VALUE);
    });

    test("getStatement", async () => {
        const stat = await api.getStatement({ statementId: ENTITY_INSTANCE_ID });
        expect(stat).toBeTruthy();
        expect(typeof stat).toMatch("object");
        expect(stat.id).toMatch(ENTITY_INSTANCE_ID);
        expect(stat.property?.id).toMatch(INSTANCE_PROPERTY);
        expect(stat.value?.content).toMatch(ENTITY_INSTANCE_VALUE);
    });
});